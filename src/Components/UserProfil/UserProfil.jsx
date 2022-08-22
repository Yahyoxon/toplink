import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../Assets/Img/LogoImg.png";
import { useForm } from "react-hook-form";
import person from "../../Assets/Img/persons.png";
import { useCreateProfile } from "../../services/mutations/create-profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEditProfile } from "../../services/mutations/edit-profile";
import "./UserProfil.css";
import { CircularProgress } from "@mui/material";
import { ChangeProfileContext } from "../../Context/ProfileChangeContext";


const UserProfil = () => {
  const { mutate, isLoading } = useCreateProfile();
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const [isChangeProfile, setIsChangeProfile] =
    useContext(ChangeProfileContext);
  const params = search.replace("?", "");
  const editprofile = useEditProfile(params.replace("/more-details", ""));
  const isMoreDetails = search.includes("more-details");
  const validationSchema = yup.object({
    username: yup
      .string("")
      .min(3, "Eng kamida 3 ta belgidan iborat bo'lishi kerak!")
      .matches(/^(?!\s+$).*/, "Harflar orasida bo'sh joy qoldirmang!")
      .required("To'ldirish majburiy"),
  });
  const username = pathname.substring(
    pathname.indexOf("/") + 1,
    pathname.indexOf("/") !== pathname.lastIndexOf("/")
      ? pathname.lastIndexOf("/")
      : pathname.length
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: "",
      location: "",
      bio: "",
      profile_img: "",
    },
  });
  const formData = new FormData();
  formData.append("profile_img", watch("profile_img")[0]);
  const onSubmit = (data) => {
    !params
      ? mutate(
          {
            username: data?.username.toLowerCase(),
            location: data?.location,
            bio: data?.bio,
          },
          {
            onSuccess: (values) => {
              navigate(`${username}/user-profile?${values?.username}`);
            },
            onError: () => {
              toast.warning("Ushbu username allaqachon mavjud!");
            },
          }
        )
      : editprofile.mutate(
          isMoreDetails
            ? {
                display_name: data?.display_name,
                location: data?.location,
                bio: data?.bio,
              }
            : formData,
          {
            onSuccess: (values) => {
              !isMoreDetails &&
                navigate(
                  `${username}/user-profile?${values?.username}/more-details`
                );

              if (isMoreDetails) {
                toast.success("Muvaffaqiyatli yaratildi!");
                setTimeout(() => {
                  navigate(`/${values?.username}`);
                  setIsChangeProfile(!isChangeProfile);
                }, 1000);
              }
            },
          }
        );
  };

  return (
    <div className="userprofil">
      <ToastContainer />
      <div className="container">
        <div className="userprofil__imgs">
          <img src={logo} alt="" className="user__img" />
        </div>
        <Fade top>
          <h2 className="userprofil__name">
            {!params ? "Username kiriting" : "Rasm yuklang"}
          </h2>
          <form
            action=""
            className="userprofil__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {!params ? (
              <label htmlFor="">
                <p>
                  {errors.username
                    ? errors.username?.message
                    : "Foydalanuvchi nomi"}
                </p>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Username"
                  error={errors?.username?.message}
                  {...register("username")}
                  className="userprofil__input"
                />
              </label>
            ) : !isMoreDetails ? (
              <>
                <input
                  className="userimage__file"
                  type="file"
                  id="file"
                  {...register("profile_img")}
                />
                <label className="userimage__label" htmlFor="file">
                  <div className="userimage__box">
                    <img
                      src={
                        (watch("profile_img") &&
                          URL.createObjectURL(watch("profile_img")[0])) ||
                        person
                      }
                      alt=""
                      className="userimage__img"
                    />
                  </div>
                </label>
              </>
            ) : (
              <>
                <label htmlFor="">
                  <p>
                    {errors.name ? errors.name?.message : "Foydalanuvchi nomi"}
                  </p>
                  <input
                    type="text"
                    required
                    error={errors?.number?.message}
                    {...register("display_name")}
                    placeholder="Kylie Jenner"
                    className="userform__input"
                  />
                </label>
                <label htmlFor="">
                  <p>Manzil</p>
                  <input
                    type="string"
                    required
                    {...register("location")}
                    placeholder="California"
                    className="userform__input"
                  />
                </label>
                <label htmlFor="">
                  <p>Qo'shimcha ma'lumotlar (bio)</p>
                  <input
                    type="text"
                    required
                    {...register("bio")}
                    placeholder="Entrepreneur Socialite and Social Media Personality"
                    className="userform__inputs"
                  />
                </label>
              </>
            )}

            <div className="userprofil__list">
              <div className="userprofil__link">
                <Link to="/" className="userprofil__btn">
                  Bekor qilish
                </Link>
              </div>

              <button type="submit" className="userprofil__button">
                {isLoading || editprofile.isLoading ? (
                  <CircularProgress
                    sx={{
                      color: "white",
                    }}
                    size={20}
                  />
                ) : isMoreDetails ? (
                  "Yaratish"
                ) : (
                  "Keyingisi"
                )}
              </button>
            </div>
          </form>
        </Fade>
      </div>
    </div>
  );
};

export default UserProfil;
