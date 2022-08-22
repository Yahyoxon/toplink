import { useParams } from "react-router-dom";
import "./AdminProfil.css";
import { useContext } from "react";
import MapsIcon from "../../Assets/Img/MapsIcon";
import { ColorContext } from "../../Context/ColorContext";
import { ButtonTextContext } from "../../Context/ButtonTextContext";
import { MatnContext } from "../../Context/TextContext";
import { Animated } from "react-animated-css";
import { AnimationContext } from "../../Context/AnimationContext";
import { FontContext } from "../../Context/FontContext";
import { SocialIcon } from "react-social-icons";
import { AdminSocialList, MainBlok } from "./index.style";
import { Paper } from "@mui/material";
import { GetProfilesDetails } from "../../services/query/get-profile-details";
import { get } from "lodash";
import { GetLinkLists } from "../../services/query/get-link-lists";
import {
  AdminProfilSkeletonInput,
  AdminProfilSkeletonCard,
} from "./index.skeleton";
import { GetBackgroundColor } from "../../services/query/get-background-color";

const AdminProfil = () => {
  const [buttonTextColor] = useContext(ButtonTextContext);
  const [color1] = useContext(ColorContext);
  const [text] = useContext(MatnContext);
  const [animation] = useContext(AnimationContext);
  const [font] = useContext(FontContext);
  const { username } = useParams();
  const { data, isSuccess, isFetching } = GetProfilesDetails(username);
  const profileLinks = GetLinkLists(username);

  /********************************************************* */

  const themeColors = GetBackgroundColor(username);

  return (
    <section className="main-right">
      {!isFetching && isSuccess ? (
        <form className="main-form">
          <input
            id="some-hijacked-input"
            className={`main-input main-input-${font} main-input-${themeColors?.data?.background_color}`}
            type="text"
            value={`https://toplink.uz/${get(data,  "[0].username ")}`}
          />
          <button
            type="button"
            className={`main-btn main-btn-${themeColors?.data?.background_color}`}
            onClick={() => {
              document.getElementById("some-hijacked-input").select();
              document.execCommand("copy");
            }}
          >
            <i
              className={`fa-regular fa-copy copy-img copy-img-${themeColors?.data?.background_color}`}
            ></i>
          </button>
        </form>
      ) : (
        <AdminProfilSkeletonInput />
      )}

      <Paper sx={{ p:3, mt: 5, mb: 5, borderRadius: "12px" }} elevation={1}>

        {!isFetching && isSuccess ? (
          <div className="main-bottom">
            <img
              src={`https://api.toplink.uz${get(data, "[0].profile_img")}`}
              alt={get(data, "[0].username")}
              className="main-avatar"
            />
            <MainBlok {...{ text }}>
              <h2
                className={`main-name main-name-${font} main-name-${themeColors?.data?.background_color}`}
              >
                @{get(data, "[0].username")}
              </h2>

              {get(data, "[0].location") > 0 && (
                <div
                  className={`main-map main-map-${themeColors?.data?.background_color}`}
                >
                  <MapsIcon />
                  <p
                    className={`main-text main-text-${font} 
                          main-text-${themeColors?.data?.background_color}`}
                  >
                    {get(data, "[0].location")}
                  </p>
                </div>
              )}
              <p
                className={`main-subname main-subname-${font} main-subname-${themeColors?.data?.background_color}`}
              >
                {get(data, "[0].full_name")}
              </p>
            </MainBlok>
          </div>
        ) : (
          <AdminProfilSkeletonCard />
        )}
      </Paper>
      <AdminSocialList {...{ color1 }} {...{ buttonTextColor }}>
        {get(profileLinks, "data", []).map((link) => (
          <Animated
            key={link?.id}
            animationIn="lightSpeedIn"
            animationOut={animation}
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <li
              className={`adminSocial-item
         adminSocial-item-${themeColors?.data?.background_color}`}
            >
              <a target="_blank"
                href={`${link.icon_url}`}
                className={`adminSocial-link adminSocial-link-${themeColors?.data?.background_color}`}
              >
                <div
                  className={`adminSocial-boxes
                    adminSocial-boxes-${themeColors?.data?.background_color}`}
                >
                  <div
                    className={`adminSocial-box1 
                            adminSocial-box1-${themeColors?.data?.background_color}`}
                  >
                    <SocialIcon url={`${link.icon_url}`} />
                  </div>
                </div>
                <div
                  className={`adminSocial-name  adminSocial-name-${font}
                          adminSocial-name-${themeColors?.data?.background_color}`}
                >
                  {link.icon_name}
                </div>
              </a>
            </li>
          </Animated>
        ))}
      </AdminSocialList>
    </section>
  );
};

export default AdminProfil;
