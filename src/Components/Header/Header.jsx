import "./Header.css";
import HeaderImg from "../../Assets/Img/1HeaderImg.png";
import telegramIcon from "../../Assets/Img/telegram.png";
import safariIcon from "../../Assets/Img/Safari.png";
import amazonIcon from "../../Assets/Img/Amazon.svg";
import paypalIcon from "../../Assets/Img/PayPal.svg";
import snapchatIcon from "../../Assets/Img/Snapchat.svg";
import steamIcon from "../../Assets/Img/Steam.svg";
import facebookIcon from "../../Assets/Img/Facebook.svg";
import shazamIcon from "../../Assets/Img/Shazam.png";
import Fade from "react-reveal/Fade";
import { Link } from "@material-ui/core";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Fade bottom>
          <div className="header-left">
            <h2 className="header-title">Endi sizga faqat Toplink kerak</h2>
            <p className="header-text">
              Bir marta bosish orqali izdoshlaringiz bilan ko'proq baham
              ko'ring. Toplink barcha kontentingizga bir joyda ulanishni
              osonlashtiradi.
            </p>
            <a href="/register-page" className="header-link">
              Toplink-dan bepul foydalaning
            </a>
            <p className="header-subtext">
              Bu haftada 5318 kishi roʻyxatdan oʻtgan!
            </p>
          </div>
        </Fade>
        <div className="header-right">
          <Fade bottom>
            <div className="header-middle">
              <img src={telegramIcon} alt="" className="telegram-icon" />
              <img src={shazamIcon} alt="" className="shazam-icon" />
              <img src={safariIcon} alt="" className="safari-icon" />
              <img src={amazonIcon} alt="" className="amazon-icon" />
              <img src={paypalIcon} alt="" className="paypal-icon" />
              <img src={snapchatIcon} alt="" className="snapchat-icon" />
              <img src={steamIcon} alt="" className="steam-icon" />
              <img src={facebookIcon} alt="" className="facebook-icon" />
            </div>
          </Fade>
          <Fade bottom>
            <img src={HeaderImg} alt="HeaderImg" className="header-img" />
          </Fade>
        </div>
      </div>
    </header>
  );
};

export default Header;
