import { useCallback, useContext, useEffect, useState } from "react";
import getCroppedImg from "./utils/get-cropped-img";
import CropperModal from "./utils/cropped-modal";
import { CircularProgress, Skeleton } from "@mui/material";
import { GetProfilesDetails } from "../../services/query/get-profile-details";
import { useEditProfile } from "../../services/mutations/edit-profile";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { get } from "lodash";
import { ChangeProfileContext } from "../../Context/ProfileChangeContext";
import LazyImage from "react-lazy-blur-image";

export const ASPECT_RATIO = 3 / 3;
export const CROP_WIDTH = 500;
const ProfileEdit = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");
  const [minZoom, setMinZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imgSrc, setImgSrc] = useState("");
  const [croppedAreaPixels, setCroppedAreaPixels] = useState();
  const { mutate, isLoading } = useEditProfile(username);
  const { data, isFetching } = GetProfilesDetails(username);
  const [isChangeProfile, setIsChangeProfile] =
    useContext(ChangeProfileContext);

  const { handleSubmit, reset, register, watch } = useForm({
    defaultValues: {
      location: get(data, "[0].location"),
      display_name: get(data, "[0].display_name"),
      bio: get(data, "[0].bio"),
    },
  });

  const [croppedImgSrc, setCroppedImgSrc] = useState();
  const changeUpdateProfile = async (values) => {
    const formData = new FormData();
    const croppedFile = new File([croppedImgSrc], uploadedFile.name, {
      lastModified: new Date(),
      type: uploadedFile.type,
    });

    if (croppedFile) {
      uploadedFile && formData.append("profile_img", uploadedFile);
      formData.append("location", values.location);
      formData.append("display_name", values.display_name);
      formData.append("bio", values.bio);
      mutate(formData, {
        onSuccess: () => {
          toast.success("Profil muvaffaqiyatli tahrirlandi!", {
            position: "top-right",
          });
          setIsChangeProfile(!isChangeProfile);
        },
        onError: () => {
          toast.error("Nimadir xato qilindi!", {
            position: "top-right",
          });
        },
      });
    }
  };
  const onMediaLoaded = useCallback((mediaSize) => {
    const { width, height } = mediaSize;
    const mediaAspectRadio = width / height;
    if (mediaAspectRadio > ASPECT_RATIO) {
      const result = CROP_WIDTH / ASPECT_RATIO / height;
      setZoom(result);
      setMinZoom(result);
      return;
    }
    const result = CROP_WIDTH / width;
    setZoom(result);
    setMinZoom(result);
  }, []);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    if (!croppedAreaPixels) return;
    try {
      const croppedImage = await getCroppedImg(imgSrc, croppedAreaPixels);
      setCroppedImgSrc(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, imgSrc]);

  const onFileChange = useCallback(async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      setUploadedFile(e.target.files[0]);
      reader.addEventListener("load", () => {
        if (reader.result) {
          setImgSrc(reader.result.toString() || "");
          setIsOpen(true);
        }
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }, []);
  useEffect(() => {
    const defaultValues = {
      profile_img: get(data, "[0].profile_img"),
      location: get(data, "[0].location"),
      display_name: get(data, "[0].display_name"),
      bio: get(data, "[0].bio"),
    };
    reset(defaultValues);
  }, [data, reset, watch]);

  return (
    <form className="edit-form" onSubmit={handleSubmit(changeUpdateProfile)}>
      <div className="edit-section">
        <div className="edit-left">
          <div
            style={{
              position: "relative",
              width: "140px",
              height: "140px",
              marginRight: 30,
            }}
          >
            <CropperModal
              crop={crop}
              setCrop={setCrop}
              zoom={zoom}
              setZoom={setZoom}
              onCropComplete={onCropComplete}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              imgSrc={imgSrc}
              showCroppedImage={showCroppedImage}
              onMediaLoaded={onMediaLoaded}
              minZoom={minZoom}
            />
            {!isFetching ? (
              <>
                <LazyImage
                  placeholder={`https://api.toplink.uz${get(
                    data,
                    "[0].profile_img"
                  )}`}
                  uri={`https://api.toplink.uz${
                    croppedImgSrc || get(data, "[0].profile_img")
                  }`}
                  // eslint-disable-next-line jsx-a11y/alt-text
                  render={(src, style) => (
                    <img
                      src={
                        uploadedFile ? URL.createObjectURL(uploadedFile) : src
                      }
                      className="edit-avatar"
                      alt="avatar"
                      htmlFor="myImage"
                    />
                  )}
                />
                <input
                  type="file"
                  name="myImage"
                  accept="image/png, 
      image/jpeg, image/jpg"
                  style={{
                    opacity: 0,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "100%",
                    height: "100%",
                  }}
                  onChange={onFileChange}
                />
              </>
            ) : (
              <Skeleton
                sx={{ backgroundColor: "#f7f7f7" }}
                variant="circular"
                width="130px"
                height="130px"
              />
            )}
          </div>
        </div>
        <div className="edit-right">
          <div className="edit-box">
            <label htmlFor="" className="edit-label">
              Foydalanuvchi nomi
            </label>
            <input
              type="text"
              className="edit-input"
              placeholder="Husanboy07"
              {...register("display_name")}
            />
          </div>
          <div className="edit-box">
            <label className="edit-label">Manzil</label>
            <input
              type="text"
              className="edit-input"
              placeholder="California"
              {...register("location")}
            />
          </div>
          <div className="edit-box">
            <label className="edit-label">Qo'shimcha ma'lumotlar (bio)</label>
            <textarea
              type="text"
              className="edit-input edit-textarea"
              placeholder="Entrepreneur, Socialite, and Social Media Personality"
              {...register("bio")}
            />
          </div>
          <button type="submit" className="edit-btn">
            {isLoading ? (
              <CircularProgress sx={{ color: "white" }} size={20} />
            ) : (
              "Saqlash"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
export default ProfileEdit;
