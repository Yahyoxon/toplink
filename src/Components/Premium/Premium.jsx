import "./Premium.css";
import { Link, useParams } from "react-router-dom";
import trueIcon from "../../Assets/Img/checkmark.png";
import Modal101 from "react-modal";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";

function ModalTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

ModalTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: "common.white",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[600],
  },
};

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "none",
    },
  };

const Premium = () => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#f00";
      }
    
      function closeModal() {
        setIsOpen(false);
      }

  const [premiumModalOpen, setPremiumModalOpen] = useState(false);

  function openPremiumModal() {
    setPremiumModalOpen(!premiumModalOpen);
  }

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [];
const {username}=useParams()
  return (
    <section className="premium">
      <ul className="premium-list">
        <li className="premium-item">
          <p className="premium-text">Foydalanuvchi domeni</p>
          <div className="premium-box">
            <h3 className="premium-title">
              Ushbu xususiyat va boshqa imkoniyatlardan foydalanish uchun
              Biznesga yangilang!
            </h3>
            <button className="premium-btn"  onClick={openModal}>
              Hozir yangilash
            </button>
          </div>
        </li>
        <li className="premium-item">
          <p className="premium-text">Foydalanuvchi domeni</p>
          <div className="premium-box">
            <h3 className="premium-title">
              Ushbu xususiyat va boshqa imkoniyatlardan foydalanish uchun
              Biznesga yangilang!
            </h3>
            <button className="premium-btn"
              onClick={openModal}>
              Hozir yangilash
            </button>
          </div>
        </li>
        <li className="premium-item">
          <p className="premium-text">Foydalanuvchi domeni</p>
          <div className="premium-box">
            <h3 className="premium-title">
              Ushbu xususiyat va boshqa imkoniyatlardan foydalanish uchun
              Biznesga yangilang!
            </h3>
            <button className="premium-btn"  onClick={openModal}>
              Hozir yangilash
            </button>
          </div>
        </li>
      </ul>
      <div className="pre-modal">
        <Modal101
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Box sx={{}}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="action tabs example"
              >
                <Tab label="Oylik" {...a11yProps(0)} />
                <Tab label="Yillik" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <ModalTabPanel value={value} index={0} dir={theme.direction}>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="premium-swiper mySwiper"
                >
                  <SwiperSlide>
                    <div className="premium-section">
                      <div className="pre-top">
                        <h3 className="pre-title">Bepul</h3>
                        <span className="premium-span">
                          <p className="premium-price">$0</p>
                          <p className="premium-subtext">/ Oylik</p>
                        </span>
                        <p className="premium-info">
                          Bu bizning bepul tarifimiz. O'z ichiga oladi:
                        </p>
                      </div>
                      <ul className="pre-list">
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            5 tagacha yoʻnalish boʻyicha bitta havola.
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Asosiy profilni sozlash, shu jumladan 5 tagacha
                            bepul mavzular.{" "}
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Bitta hisobdan bir nechta TopLink profillarini
                            boshqaring.{" "}
                          </p>
                        </li>
                      </ul>

                      <a href={`/${username}/accountkarta`}>
                        <button className="pre-btn">Tarifni tanlash</button>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="premium-section">
                      <div className="pre-top">
                        <h3 className="pre-title">Professional</h3>
                        <span className="premium-span">
                          <p className="premium-price">$9</p>
                          <p className="premium-subtext">/ Oylik</p>
                        </span>
                        <p className="premium-info">
                          Barcha bepul tariflarni o'z ichiga oladi, shuningdek:{" "}
                        </p>
                      </div>
                      <ul className="pre-list">
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Cheksiz manzillar bilan bitta havola.
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            To'liq profilni sozlash, shu jumladan Lite va maxsus
                            mavzular.
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Havola ishlashini kuzatish uchun real vaqt tahliliga
                            kirish.
                          </p>
                        </li>
                      </ul>

                      <a href={`/${username}/accountkarta`}>
                        <button className="pre-btn">Tarifni tanlash</button>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="premium-section">
                      <div className="pre-top">
                        <h3 className="pre-title">Biznes</h3>
                        <span className="premium-span">
                          <p className="premium-price">$19</p>
                          <p className="premium-subtext">/ Oylik</p>
                        </span>
                        <p className="premium-info">
                          Barcha bepul va professional tariftlarni o'z ichiga
                          oladi, shuningdek:
                        </p>
                      </div>
                      <ul className="pre-list">
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            CSS yordamida profilni sozlash.{" "}
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            TopLink havolasini o'z domeningiz bilan
                            almashtiring.{" "}
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Havolalarni profilingizning yuqori yoki pastki
                            qismida piktogramma sifatida ko'rsating.
                          </p>
                        </li>
                      </ul>

                      <a href={`/${username}/accountkarta`}>
                        <button className="pre-btn">Tarifni tanlash</button>
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </ModalTabPanel>
              <ModalTabPanel value={value} index={1} dir={theme.direction}>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="premium-swiper mySwiper"
                >
                  <SwiperSlide>
                    <div className="premium-section">
                      <div className="pre-top">
                        <h3 className="pre-title">Bepul</h3>
                        <span className="premium-span">
                          <p className="premium-price">$0</p>
                          <p className="premium-subtext">/ Yillik</p>
                        </span>
                        <p className="premium-info">
                          Bu bizning bepul tarifimiz. O'z ichiga oladi:
                        </p>
                      </div>
                      <ul className="pre-list">
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            5 tagacha yoʻnalish boʻyicha bitta havola.
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Asosiy profilni sozlash, shu jumladan 5 tagacha
                            bepul mavzular.{" "}
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Bitta hisobdan bir nechta TopLink profillarini
                            boshqaring.{" "}
                          </p>
                        </li>
                      </ul>
                      <a href={`/${username}/accountkarta`}>
                        <button className="pre-btn">Tarifni tanlash</button>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="premium-section">
                      <div className="pre-top">
                        <h3 className="pre-title">Professional</h3>
                        <span className="premium-span">
                          <p className="premium-price">$90</p>
                          <p className="premium-subtext">/ Yillik</p>
                        </span>
                        <p className="premium-info">
                          Barcha bepul tariflarni o'z ichiga oladi, shuningdek:{" "}
                        </p>
                      </div>
                      <ul className="pre-list">
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Cheksiz manzillar bilan bitta havola.
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            To'liq profilni sozlash, shu jumladan Lite va maxsus
                            mavzular.
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Havola ishlashini kuzatish uchun real vaqt tahliliga
                            kirish.
                          </p>
                        </li>
                      </ul>

                      <a href={`/${username}/accountkarta`}>
                        <button className="pre-btn">Tarifni tanlash</button>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="premium-section">
                      <div className="pre-top">
                        <h3 className="pre-title">Biznes</h3>
                        <span className="premium-span">
                          <p className="premium-price">$190</p>
                          <p className="premium-subtext">/ Yillik</p>
                        </span>
                        <p className="premium-info">
                          Barcha bepul va professional tariftlarni o'z ichiga
                          oladi, shuningdek:
                        </p>
                      </div>
                      <ul className="pre-list">
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            CSS yordamida profilni sozlash.{" "}
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            TopLink havolasini o'z domeningiz bilan
                            almashtiring.{" "}
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Havolalarni profilingizning yuqori yoki pastki
                            qismida piktogramma sifatida ko'rsating.
                          </p>
                        </li>
                      </ul>

                      <a href={`/${username}/accountkarta`}>
                        <button className="pre-btn">Tarifni tanlash</button>
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </ModalTabPanel>
            </SwipeableViews>
          </Box>
        </Modal101>
      </div>
    </section>
  );
};

export default Premium;
