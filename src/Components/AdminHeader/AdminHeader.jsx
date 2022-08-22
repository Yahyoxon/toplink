import { Link, useNavigate } from "react-router-dom";
import "./AdminHeader.css";
import adminLogo from "../../../src/Assets/Img/LogoImg.png";
import adminMenu from "../../../src/Assets/Img/menu.png";
import { useContext, useState } from "react";
import Modal from "react-modal";
import Modal101 from "react-modal";
import exitPic from "../../Assets/Img/exit.png";
import trueIcon from "../../Assets/Img/checkmark.png";
import React from "react";
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
import MenuBtn from "../../Assets/SVG/MenuBtn";
import ExitModal from "../ExitModal/ExitModal";
import Profile from "../../Assets/SVG/Profile";
import Analitika from "../../Assets/SVG/Analitika";
import Murojaat from "../../Assets/SVG/Murojaat";
import Accounts from "../../Assets/SVG/Accounts";
import Account from "../../Assets/SVG/Account";
import { get } from "lodash";
import close from "../../Assets/Img/close.png";
import arrow from "../../Assets/Img/arow.png";

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

const AdminHeader = ({ username, profileLists }) => {
  const handleAddClass = (evt) => {
    const links = document.querySelectorAll(".dashboard__link-active");
    links.forEach((link) => {
      link.classList.remove("dashboard__link-active");
    });
    evt.currentTarget.classList.add("dashboard__link-active");
  };

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

  const [modalIsOpen1, setIsOpen1] = useState(false);
  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    subtitle.style.color = "#f00";
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  const [premiumModalOpen, setPremiumModalOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
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
  const history = useNavigate();

  const logout = () => {
    localStorage.clear();
    history("/loginpage");
    window.location.reload();
  };

  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };

  const handeleProfileSelection = (singleProfile) => {
    history(`/${get(singleProfile, "username")}`);
    // window.location.reload();
  };

  const filteredSingleProfile = profileLists?.filter(
    (listItem) => listItem?.username === username
  );

  return (
    <div className="admin-header ">
      <div className="container">
        <Link to={`${username}`} className="admin-logo">
          <img src={adminLogo} alt="" className="admin-brand" />
        </Link>

        <ul className="admin-header-list">
          <li className="admin-header-item">
            <Link to={`${username}`} className="admin-header-link">
              Ko’rib chiqish
            </Link>
          </li>
          <li className="admin-header-item">
            <Link to={`${username}/edit`} className="admin-header-link">
              Tahrirlash
            </Link>
          </li>
          <li className="admin-header-item">
            <Link className="admin-header-link" to={`${username}/settings`}>
              Sozlamalar
            </Link>
          </li>
          <li className="admin-header-item">
            <Link
              to={`${username}/premium`}
              className="admin-header-link register"
            >
              Premium
            </Link>
          </li>
          <li className="admin-header-item">
            <a
              className="admin-header-link
                 register"
              href="#"
              onClick={openModal}
            >
              Yangilash
            </a>
          </li>
        </ul>
        <button className="admin-menu-btn" onClick={openModal1}>
          <MenuBtn />
        </button>
        <div className="drop-btn">
          {/* <Dropdown /> */}
          Dropdown
        </div>
      </div>

      <div className="navs-modal">
        <Modal
          isOpen={modalIsOpen1}
          onAfterOpen={afterOpenModal1}
          onRequestClose={closeModal1}
          className="admin-header-modal"
          contentLabel="Example Modal"
        >
          <ul className="nav-lists">
            <button onClick={closeModal1} className="close-menu">
              <img src={close} alt="Close Logo" className="admin-menu-close" />
            </button>
            <section className="admin-dashboard">
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

              <ul className="admin-dashboard-list">
                <li className="admin-dashboard-item">
                  <Link
                    onClick={handleAddClass}
                    className="admin-dashboard-link"
                    to={`/${username}`}
                  >
                    <Profile />
                    Profile
                  </Link>
                </li>
                <li className="admin-dashboard-item">
                  <Link
                    onClick={handleAddClass}
                    className="admin-dashboard-link"
                    to={`${username}/analytic`}
                  >
                    <Analitika />
                    Analitika
                  </Link>
                </li>
                <li className="admin-dashboard-item">
                  <Link
                    onClick={handleAddClass}
                    className="admin-dashboard-link"
                    to={`${username}/refertofriend`}
                  >
                    <Murojaat />
                    Do’stlarga murojat
                  </Link>
                </li>
                <li className="admin-dashboard-item">
                  <Link
                    onClick={handleAddClass}
                    className="admin-dashboard-link"
                    to={`${username}/account`}
                  >
                    {" "}
                    <Account />
                    Akkount
                  </Link>
                </li>
                <li className="admin-dashboard-item">
                  <Link
                    className="admin-dashboard-link"
                    onClick={() => openPremiumModal()}
                    to="#"
                  >
                    <img src={exitPic} alt="" className="admin-dashboard-pic" />
                    <p className="admin-dashboard-text admin-dashboard-red">
                      Chiqish
                    </p>
                  </Link>
                </li>
                <li className="admin-dashboard-item">
                  <button onClick={openModal} className="admin-dashboard-btn">
                    Yangilash
                  </button>
                </li>
              </ul>
            </section>
          </ul>
        </Modal>
      </div>
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
    </div>
  );
};

export default AdminHeader;
