import "./ResultPage.css";
import resultpageImg from "../../Assets/Img/avatar1.png";
import MapsIcon from "./../../Assets/Img/MapsIcon";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/ThemeContext";
import resultpageLogo from "../../Assets/Img/LogoImg.png";
import "../../Components/AdminProfil/AdminProfil.css";
import styled from "styled-components";
import { MatnContext } from "../../Context/TextContext";
import { ButtonTextContext } from "../../Context/ButtonTextContext";
import { ColorContext } from "../../Context/ColorContext";
import { Animated } from "react-animated-css";
import { AnimationContext } from "../../Context/AnimationContext";
import { FontContext } from "../../Context/FontContext";
import { SocialIcon } from "react-social-icons";
import { GetBackgroundColor } from "../../services/query/get-background-color";
import { GetLinkLists } from "../../services/query/get-link-lists";
import { GetProfilesDetails } from "../../services/query/get-profile-details";
import { get } from "lodash";
import { Box, CircularProgress } from "@mui/material";

export const MainBlok = styled.div`

    margin-left: 25px;

   .main-name{
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        height: 39px;
        width: 260px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: ${(props) => (props.text.length > 0 ? props.text : "#01384D")} 
    }
    div{
        display: flex;
        border: 1px solid #512DA8;
        border-radius: 30px;
        padding: 8px 5px;
        padding-left: 15px;
        width: 200px;
        margin: 8px 0;
    }
    .main-text{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-left: 10px;
        height: 25px;
        width: 160px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: ${(props) => (props.text.length > 0 ? props.text : "#01384D")} 
   
    }
    .main-subname{
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${(props) => (props.text.length > 0 ? props.text : "#01384D")} ;
        height: 20px;
        width: 320px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .main-map{
        display: flex;
       border: 1px solid ${(props) =>
         props.text.length > 0 ? props.text : "#512DA8"};
       border-radius: 30px;
       padding: 8px 5px;
       padding-left: 15px;
       width: 200px;
       margin: 8px 0; 
   }
   .main-map-blue, .main-map-dark,.main-map-dusk,.main-map-purple , .main-map-warm  {
    border: 1px solid white;
}
.main-subname-blue, .main-subname-dark,.main-subname-dusk,.main-subname-purple , .main-subname-warm,.main-subname-neon, .main-subname-pastel, .main-subname-luxury,.main-subname-stitched,.main-subname-sunset,.main-subname-friendly {
    color: white;
}
.main-map-neon {
    box-shadow: 0.5px 0.5px 4px #EA33F7;
    border: 2px solid #EA33F7;
}
.main-map-pastel {
    border: 2px solid white;
}
.main-map-luxury {
    background: linear-gradient(90.12deg, #C7AD5C 0.6%, #D8C78D 58.18%, #877335 99.9%);
    border: none;
}
.main-map-stitched,.main-map-sunset, .main-map-friendly  {
    background: transparent;
    border: 1px solid white;
}

 .main-name-blue,.main-name-dark,.main-name-dusk,.main-name-purple
 ,.main-name-warm, .main-name-neon, .main-name-pastel, .main-name-luxury  
 ,.main-name-stitched, .main-name-sunset, .main-name-friendly  {
    color: #FFFFFF;
}

 .main-text-blue, .main-text-dark,  .main-text-dusk,
   .main-text-purple, .main-text-warm, .main-text-pastel,  .main-text-stitched, .main-text-sunset, .main-text-friendly {
    color: white;
}

.main-text-neon {
    color:#FFFF54;
}

 .main-text-luxury,
 .main-text-luxury {
    color: black;
}
 
.main-icon {
    fill: ${(props) => (props.text.length > 0 ? props.text : "black")} ;
    width: 15px;
    height: 18px;
    margin-top: 4px;

}
.main-icon-blue,.main-icon-dark,.main-icon-dusk, .main-icon-purple, .main-icon-warm, .main-icon-pastel,, .main-icon-sunset,.main-icon-friendly ,.main-icon-stitched {
    fill: white;
}

.main-icon-neon {
    fill: #FFFF54;
}
    
.main-icon-luxury{
    fill:black;
}


@media(max-width:720px){
    .container{
        width:600px;
    }
    .main-map{
    width: 100%;

    }
}
@media(max-width:420px){
  .container {
    width: 100%;
    padding: 0px 15px;
  }
    .main-name{
        font-size: 22px;
        line-height: 35px;
        height: 33px;
        margin: 0 auto;
    }
    .main-map {
        width: 73%;
        margin: 10px auto;
}
`;
export const ResultPageList = styled.ul`
  padding: 30px 0;
  min-height: 66vh;
  .adminSocial-link {
    display: flex;
    align-items: center;
    width: 612px;
    height: 54px;
    padding: 0px 16px;
    background: ${(props) =>
      props.color1.length > 0 ? props.color1 : "#84B0EC"};
    border-radius: 12px;
  }
  .adminSocial-name {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 54px;
    border-left: 0.1px solid rgb(229, 229, 229);
    padding-left: 16px;
    color: ${(props) =>
      props.buttonTextColor.length > 0 ? props.buttonTextColor : "white"};
    white-space: nowrap;
    text-overflow: hidden;
    height: 54px;
  }
  .adminSocial-item {
    margin: 15px 0;
  }
  .adminSocial-boxes {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    margin: 0px 15px;
    margin-left: 0;
    margin-right: 16px;
    align-items: center;

    border-radius: 8px;
  }

  .adminSocial-link-blue {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
  }
  .adminSocial-link-dark {
    background: #2253ef;
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
  }

  .adminSocial-link-dusk,
  .adminSocial-link-pastel,
  .adminSocial-link-sunset {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
  }
  .adminSocial-link-purple {
    background: transparent;
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
    border: 1px solid #ffffff;
  }
  .adminSocial-link-warm {
    background: transparent;
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
    border: 1px solid transparent;
  }
  .adminSocial-link-neon {
    background: transparent;
    box-shadow: 0.5px 0.5px 4px #ffff54;
    border: 2px solid #ffff00;
  }
  .adminSocial-link-luxury {
    background: transparent;
    border: 2px solid #c7ad5c;
  }
  .adminSocial-link-stitched {
    background: transparent;
    border: 2px dashed rgba(0, 0, 0, 0.2);
  }
  .adminSocial-link-friendly {
    background: white;
    color: black;
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
  }

  .adminSocial-name-blue,
  .adminSocial-name-dark,
  .adminSocial-name-dusk,
  .adminSocial-name-purple,
  .adminSocial-name-warm,
  .adminSocial-name-neon,
  .adminSocial-name-pastel,
  .adminSocial-name-luxury {
    color: white;
  }
  .adminSocial-name-stitched {
    border-left: none;
    color: white;
  }

  .adminSocial-name-sunset {
    color: white;
    border-left: 0.5px solid #abbac3;
  }
  .adminSocial-name-friendly {
    color: black;
    border-left: 0.5px solid #abbac3;
  }

  .adminSocial-item-stitched {
    padding: 2.5px;
    border-radius: 12px;
    background: #2253ef;
  }

  .adminSocial-boxes-stitched,
  .adminSocial-boxes-sunset,
  .adminSocial-boxes-friendly {
    background-color: transparent;
  }
  .fa-brands {
    color: ${(props) =>
      props.buttonTextColor.length > 0 ? props.buttonTextColor : "white"};
    font-size: 26px;
    font-weight: 100;
    width: 26px;
    height: 26px;
  }

  .map-svg-blue,
  .map-svg-dark,
  .map-svg-dusk,
  .map-svg-purple,
  .map-svg-warm,
  .map-svg-pastel,
  .map-svg-stitched,
  .map-svg-sunset {
    color: white;
  }
  .map-svg-neon {
    color: yellow;
  }
  .map-svg-luxury {
    color: #c7ad5c;
  }
  .map-svg-friendly {
    color: black;
  }
  @media (max-width: 920px) {
    .container {
      width: 800px;
    }
    .adminSocial-link {
      width: 405px;
    }
  }
  @media (max-width: 420px) {
    .container {
      width: 100%;
      padding: 0px 15px;
    }
    .adminSocial-link {
      width: 294px;
    }
  }

  .social-icon {
    width: 38px !important;
    height: 38px !important;
    background: transparent;
    color: white;
    fill: white;
  }
  .social-svg {
    width: 76% !important;
    height: 76% !important;
    top: 4px !important;
    left: 4px !important;
    fill: white;
    background: white;
  }
`;

const ResultPage = (props) => {
  const [theme, setTheme] = useContext(Context);
  const [svgColor, setSvgColor] = useState("red");
  const [text, setText] = useContext(MatnContext);
  const [buttonTextColor, setButtonTextColor] = useContext(ButtonTextContext);
  const [color1, setColor1] = useContext(ColorContext);

  useEffect(() => {
    switch (theme) {
      case "classic":
        setSvgColor("#2253EF");
        break;
      case "blue":
        setSvgColor("#70A1EA");
        break;
      case "dark":
        setSvgColor("#2253EF");
        break;
      case "dusk":
        setSvgColor("#612F3E");
        break;
      case "purple":
        setSvgColor("#4D4D9D");
        break;
      case "warm":
        setSvgColor("#F8CF55");
        break;
      case "neon":
        setSvgColor("#4D4D9D");
        break;
      case "pastel":
        setSvgColor("#BDD78D");
        break;
      case "luxury":
        setSvgColor("#C7AD5C");
        break;
      case "stitched":
        setSvgColor("white");
        break;
      case "sunset":
        setSvgColor("white");
        break;
      case "friendly":
        setSvgColor("black");
        break;
      default:
        setSvgColor("black");
        break;
    }
  }, [theme]);
  const [animation, setAnimation] = useContext(AnimationContext);
  const [font, setFont] = useContext(FontContext);

  /************************  profile detail ********************* */

  const { username } = useParams();

  /**********************   link-list       *************************** */

  const [linkId, setLinkId] = useState("");
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const { data, isSuccess, isFetching } = GetProfilesDetails(username);
  const profileLinks = GetLinkLists(username);

  /****************    theme api       ********************************** */

  const themeColors = GetBackgroundColor(username);

  const [linkViews, setLinkViews] = useState([]);

  useEffect(() => {
    fetch(`https://api.toplink.uz/api/v1/accounts/link-views/${linkId}/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((views) => {
        setLinkViews([views]);
      });
  }, [linkId]);

  /******************   html code          *******************  */
  return (
    <>
      {!themeColors?.isFetching ? (
        <section
          className={`resultpage adminProfile-page-${themeColors?.data?.background_color}`}
        >
          <div className="container">
            <div className="resultpage-main">
              <div className="resultpage-top">
                <img
                  src={`https://api.toplink.uz${get(data, "[0].profile_img")}`}
                  alt={get(data, "[0].username")}
                  className="resultpage-avatar"
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
              <ResultPageList {...{ color1 }} {...{ buttonTextColor }}>
                {profileLinks?.data?.map((event, i) => (
                  <li
                    key={i}
                    className={`resultpage-item
         adminSocial-item-${themeColors?.data?.background_color}`}
                  >
                    <Animated
                      animationIn="lightSpeedIn"
                      animationOut={animation}
                      animationInDuration={1000}
                      animationOutDuration={1000}
                      isVisible={true}
                    >
                      <a
                        href={`${event.icon_url}`}
                        onClick={() => setLinkId(event.id)}
                        target="_blank"
                        className={`adminSocial-link resultpage-link 
                    adminSocial-link-${themeColors?.data?.background_color}`}
                      >
                        <div
                          className={`adminSocial-boxes
                    adminSocial-boxes-${themeColors?.data?.background_color}`}
                        >
                          <div
                            className={`adminSocial-box1 
                            adminSocial-box1-${themeColors?.data?.background_color}`}
                          >
                            <SocialIcon url={`${event.icon_url}`} />
                          </div>
                        </div>
                        <div
                          className={`adminSocial-name adminSocial-name-${font} adminSocial-name-${themeColors?.data?.background_color}`}
                        >
                          {event.icon_name}
                        </div>
                      </a>
                    </Animated>
                  </li>
                ))}
              </ResultPageList>
              <div className="resultpage-footer">
                <a href="https://toplink.uz/" className="resultpage-link">
                  <img
                    src={resultpageLogo}
                    alt=""
                    className="resultpage-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default ResultPage;
