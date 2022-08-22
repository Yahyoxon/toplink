import "./Analytic.css";
import analyticAvatar from "../../Assets/Img/avatar1.png";
import { Link, useParams } from "react-router-dom";
import trueIcon from "../../Assets/Img/checkmark.png";
import Modal from "../Modal/Modal";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal101 from 'react-modal'
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
import { GetLinkLists } from "../../services/query/get-link-lists";
import { GetProfilesDetails } from "../../services/query/get-profile-details";
import { get } from "lodash";
import { GetProfilViews } from "../../services/query/get-profile-views";

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

const Analytic = () => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
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


  const { username } = useParams();

 /****** *******    profile detail *********** */


 const { data, isSuccess, isFetching } = 
  GetProfilesDetails(username);

  /************************* link list ************************** */
  
  const profileLinks = GetLinkLists(username);

  /*****************  profil views      ***************** */
const profileViews = GetProfilViews(username);
// console.log(profileViews?.data?.data?.view_count);

/***************** link views      ******************** */

const [linkViews, setLinkViews] = useState([]);

useEffect(() => {
    fetch(`https://api.toplink.uz/api/v1/accounts/link-detail/${username}/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((views) => {
        setLinkViews([views])
      });
  }, [username]);
  
  return (
    <section className="analytic">
      <div className="analytic-top">
        <div className="analytic-left">
          <img  src={`https://api.toplink.uz${get(data, "[0].profile_img")}`}
                alt={get(data, "[0].username")}
           className="analytic-avatar" />
          <div className="analytic-header">
            <h2 className="analytic-name">           
               @{get(data, "[0].username")}
 </h2>
            <p className="analytic-subname">
            {get(data, "[0].full_name")}
            </p>
          </div>
        </div>
        <div className="analytic-right">
          <button onClick={openModal} className="analytic-link">
            Hozir yangilash
          </button>
        </div>
      </div>
      <div className="analytic-medium">
        <div className="analytic-text">Profilning qisqacha tavsifi</div>
        <div className="analytic-blok">
          <div className="analytic-box">
            <h2 className="analytic-number">
            {profileViews?.data?.data?.view_count}
            </h2>
            <p className="analytic-subtext">Barcha ko’rishlar</p>
          </div>
          <div className="analytic-box">
            <h2 className="analytic-number">
                {   linkViews[0]?.total_clicks?.total_view  }
            </h2>
            <p className="analytic-subtext">Barcha yangilashlar</p>
          </div>
        </div>
      </div>
      <div className="analytic-footer">
        <div className="analytic-havola">Havolalarni bosish</div>
        <ul className="analytic-list">
           {linkViews[0]?.click_for_one_link && linkViews[0]?.click_for_one_link?.map((view)=>( 
          <>
          <li className="analytic-item">
            <div  className="analytic-links">
              <span>
                {view?.icon_name}
                </span>
              <a href={`${view?.icon_url}`}>
              {view?.icon_url}
              </a>
            </div>
            <div className="analytic-count">
            {view?.view_count}
            </div>
          </li>
         
          </>
              ))}   
        </ul>
      </div>

      <div className="pre-modal">
      <Modal101
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <button onClick={closeModal}>close</button> */}
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

export default Analytic;
