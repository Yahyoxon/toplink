import "./Dashboard.css";
import exitPic from "../../Assets/Img/exit.png";
import { Link, useNavigate } from "react-router-dom";
import ExitModal from "../ExitModal/ExitModal";
import trueIcon from "../../Assets/Img/checkmark.png";
import Modal101 from "react-modal";
import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import arrow from "../../Assets/Img/arow.png";
import Account from "../../Assets/SVG/Account";
import Murojaat from "../../Assets/SVG/Murojaat";
import Analitika from "../../Assets/SVG/Analitika";
import Profile from "../../Assets/SVG/Profile";
import { get } from "lodash";

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

const Dashboard = ({ profileLists, username }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const [premiumModalOpen22, setPremiumModalOpen22] = useState(false);
  const [show, setShow] = useState(false);
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

  const handleAddClass = (evt) => {
    const links = document.querySelectorAll(".dashboard__link-active");
    links.forEach((link) => {
      link.classList.remove("dashboard__link-active");
    });
    evt.currentTarget.classList.add("dashboard__link-active");
  };

  function openPremiumModal() {
    setPremiumModalOpen(!premiumModalOpen);
  }

  function openPremiumModal22() {
    setPremiumModalOpen22(!premiumModalOpen22);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };

  /////////////////////////////////////////////////////////

  const history = useNavigate();
  const theme = useTheme();

  const handeleProfileSelection = (singleProfile) => {
    history(`/${get(singleProfile, "username")}`);
    // window.location.reload();
  };

  const filteredSingleProfile = profileLists?.filter(
    (listItem) => listItem?.username === username
  );
  const logout = () => {
    localStorage.clear();
    history("/loginpage");
    window.location.reload();
  };
  return (
    <section className="dashboard" style={{ background: "#fff" }}>
      <div className="dashboard-top">
        <div className="dashboard-image-wrapper">
          <img
            src={`https://api.toplink.uz${
              get(filteredSingleProfile, "[0].profile_img") ||
              get(profileLists, "[0].profile_img")
            }`}
            alt="avatar"
            className="dashboard-avatar"
          />
        </div>
        <div className="dashboard-box" onClick={handleOpen}>
          <h2 className="dashboard-name">
            {get(filteredSingleProfile, "[0].username")}
          </h2>
          <button className="dashboard__sign">
            {show ? (
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            )}
          </button>
        </div>

        {show && (
          <div className="dashboard-scroll">
            <div className="accordian-body">
              <Link
                className="dashboard__links"
                to={`/${username}/user-profile`}
              >
                <img src={arrow} className="dashboard__img" alt="" />
                <span>Qo'shish</span>
              </Link>
            </div>
            {get(profileLists, "length") > 0 &&
              profileLists?.map(
                (item) =>
                  get(item, "username") !== username && (
                    <Link
                      to={`/${get(item, "username")}`}
                      key={get(item, "id")}
                    >
                      <div
                        className="profile-list"
                        onClick={() => handeleProfileSelection(item)}
                      >
                        <div className="image-wrapper">
                          <img
                            src={`https://api.toplink.uz${get(
                              item,
                              "profile_img"
                            )}`}
                            alt={get(item, "username")}
                          />
                        </div>
                        <span>{get(item, "username")}</span>
                      </div>
                    </Link>
                  )
              )}
          </div>
        )}
      </div>
      <ul className="dashboard-list">
        <li className="dashboard-item">
          <Link
            className="dashboard-link"
            to={`/${username}`}
            onClick={handleAddClass}
          >
            <Profile />
            Profil
          </Link>
        </li>
        <li className="dashboard-item">
          <Link
            onClick={handleAddClass}
            className="dashboard-link"
            to={`${username}/analytic`}
          >
            <Analitika />
            Analitika
          </Link>
        </li>
        <li className="dashboard-item">
          <Link
            onClick={handleAddClass}
            className="dashboard-link"
            to={`${username}/refertofriend`}
          >
            <Murojaat />
            Do’stlarga murojat
          </Link>
        </li>
        <li className="dashboard-item">
          <Link
            onClick={handleAddClass}
            className="dashboard-link"
            to={`${username}/account`}
          >
            <Account />
            Akkount
          </Link>
        </li>
        <li className="dashboard-item">
          <Link
            className="dashboard-link"
            onClick={() => openPremiumModal()}
            to="#"
          >
            <img src={exitPic} alt="" className="dashboard-pic" />
            <p className="dashboard-text dashboard-red">Chiqish</p>
          </Link>
        </li>
        <li className="dashboard-item">
          <button className="dashboard-btn" onClick={openModal}>
            Yangilash
          </button>
        </li>
      </ul>
      <ExitModal
        show={premiumModalOpen}
        className="exit-modal"
        contentLabel="Example Modal"
      >
        <button
          onClick={() => setPremiumModalOpen()}
          className="exit-close-menu"
        >
          &times;
        </button>
        <div className="exit-header">
          <h4>Chiqish</h4>
          <p>
            Chiqishni xohlaysizmi ? Hisobingizdan chiqib ketsangiz, profilingiz
            va barcha ma’lumotlaringizni qayta kiritishingiz kerak bo‘ladi
          </p>
        </div>
        <div className="exit-footer">
          <button onClick={() => setPremiumModalOpen()}>Yo'q </button>
          <button onClick={logout}>Ha</button>
        </div>
      </ExitModal>
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
                            bepul mavzular.
                          </p>
                        </li>
                        <li className="pre-item">
                          <img src={trueIcon} alt="" className="pre-icons" />
                          <p className="pre-subinfo">
                            Bitta hisobdan bir nechta TopLink profillarini
                            boshqaring.
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

export default Dashboard;
