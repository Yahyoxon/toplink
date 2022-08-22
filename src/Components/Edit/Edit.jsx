import { useParams } from "react-router-dom";
import "./Edit.css";
import { SocialIcon } from "react-social-icons";
import dragIcon from "../../Assets/Img/drag_indicator.png";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FloatingActionButtonZoom from "./TabPanel";
import { LinkContext } from "../../Context/LinkContext";
import ThumbnailModal from "../ThumbnailModal/ThumbnailModal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProModal from "../Modal/ProModal";
import { get } from "lodash";
import ProfileEdit from "./EditProfile";
import { ToastContainer, toast } from "react-toastify";
import { GetProfilesDetails } from "../../services/query/get-profile-details";
import { GetLinkLists } from "../../services/query/get-link-lists";
import { CircularProgress } from "@mui/material";
import { useUpdateLink } from "../../services/mutations/change-link";
import { useFieldArray, useForm } from "react-hook-form";
import { useLinkDelete } from "../../services/mutations/delete-link";
import { green } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Switch demo" } };

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

function TabPanel(props) {
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
TabPanel.propTypes = {
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

const Edit = () => {
  const { username } = useParams();
  const [expanded, setExpanded] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const { data, isFetching } = GetLinkLists(username, isChanged);

  const [linkId, setLinkId] = useState("");
  const [inputId, setInputId] = useState(0);
  // const filteredDefalutLink =
  //   linkId && data && data.filter((item) => item?.id === linkId);
  const theme = useTheme();
  const [thumbnailModal, setThumbnailModalOpen] = useState(false);
  const [value, setValue] = React.useState(0);
  const profile = GetProfilesDetails(username);
  const { mutate, isLoading } = useUpdateLink(linkId);
  const deleteLink = useLinkDelete(linkId);

  // const validationSchema = yup.object({
  //   icon_url: yup
  //     .string("")
  //     .matches(/https:/, "URL noto'g'ri kiritildi!")
  //     .required("To'ldirish majburiy"),
  //   icon_name: yup.string("").required("To'ldirish majburiy"),
  // });
  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    watch,
  } = useForm();

  useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "link", // unique name for your Field Array
  });
  const changeLinkGetUpdate = async (values) => {
    const requestData = {
      icon_url: get(values, `link[${inputId}].icon_url`),
      icon_name: get(values, `link[${inputId}].icon_name`),
      profile: get(profile, "data[0].id"),
    };
    mutate(requestData, {
      onSuccess: () => {
        toast.success("Link muvaffaqiyatli tahrirlandi!", {
          position: "top-right",
        });
        setIsChanged(!isChanged);
      },
    });
  };

  const changeLinkDelete = async () => {
    deleteLink?.mutate("", {
      onSuccess: () => {
        toast.success("Link muvaffaqiyatli o'chirildi!", {
          position: "top-right",
        });
        setIsChanged(!isChanged);
      },
    });
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleChange = (panel, item, index) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setInputId(index);
  };

  return (
    <section className="edit-main">
      <ToastContainer />
      <ProfileEdit
        {...{
          username,
        }}
      />
      <div className="edit-footer">
        <Accordion
          expanded={expanded === "panel11"}
          className="edit-boxes"
          onChange={handleChange("panel11")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="edit-add"
          >
            <Typography className="edit-add-box">
              {!LinkContext || !watch("icon_url") ? (
                <span className="edit-plus">+</span>
              ) : (
                <SocialIcon
                  style={{ fontSize: "10px" }}
                  url={`${LinkContext || watch("icon_url")}`}
                  bgColor="#7979ff"
                />
              )}
              <p className="edit-text">Yangi link qo'shish</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="edit-general">
              <FloatingActionButtonZoom
                profileId={get(profile, "data[0].id")}
                {...{ isChanged, setIsChanged, setExpanded }}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        {!isFetching ? (
          get(data, "length") > 0 &&
          data?.map((item, i) => (
            <Accordion
              key={item?.id}
              onClick={() => setLinkId(item?.id)}
              expanded={expanded === `panell${item?.id}`}
              className="edit-boxes"
              onChange={handleChange(`panell${item?.id}`, item?.id, i)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <>
                  <Typography>
                    <li key={i} className="social-item">
                      <span className="social-link">
                        <SocialIcon target="_blank"
                          datasetId={item.id}
                          style={{ fontSize: "10px" }}
                          url={`${item.icon_url}`}
                        />
                        <p className="social-name">{item.icon_name}</p>
                        <button className="social-btn">
                          <img src={dragIcon} alt="" className="social-img" />
                        </button>
                      </span>
                    </li>
                  </Typography>
                </>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="edit-general">
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      position: "relative",
                      minHeight: 200,
                    }}
                  >
                    <AppBar position="static" color="default">
                      <Tabs
                        value={value}
                        onChange={handleChange1}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                      >
                        <Tab label="General" {...a11yProps(0)} />
                        <Tab label="Scheduling" {...a11yProps(1)} />
                        <Tab label="Animation" {...a11yProps(2)} />
                        <Tab label="Thumbnail" {...a11yProps(3)} />
                        <Tab label="Redirect" {...a11yProps(4)} />
                      </Tabs>
                    </AppBar>
                    <SwipeableViews
                      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                      index={value}
                      onChangeIndex={handleChangeIndex}
                    >
                      <TabPanel
                        style={{ overflow: `hidden` }}
                        value={value}
                        index={0}
                        dir={theme.direction}
                      >
                        <form
                          className="add-form"
                          onSubmit={handleSubmit(changeLinkGetUpdate)}
                        >
                          <div className="add-box">
                            <label className="add-label">Link nomi</label>
                            <input
                              datasetId={item.id}
                              type="text"
                              // required
                              defaultValue={item?.icon_name}
                              // name={`link.${i}.icon_name`}
                              className="add-input"
                              placeholder="Twitter"
                              {...register(`link.${i}.icon_name`)}
                            />
                            {errors?.icon_name && (
                              <p style={{ color: "red", fontSize: "13px" }}>
                                {errors?.icon_name?.message}
                              </p>
                            )}
                          </div>
                          <div className="add-box">
                            <label className="add-label">URL</label>
                            <input
                              // required
                              type="text"
                              defaultValue={item?.icon_url}
                              // name={`link.${i}.icon_url`}
                              className="add-input"
                              placeholder="https//Linkedn.com/husanboytursunov"
                              {...register(`link.${i}.icon_url`)}
                            />
                            {errors?.icon_url && (
                              <p style={{ color: "red", fontSize: "13px" }}>
                                {errors?.icon_url?.message}
                              </p>
                            )}
                          </div>
                          <div className="add-footer">
                            <button
                              className="add-cancel"
                              type="button"
                              onClick={changeLinkDelete}
                            >
                              O'chirish
                            </button>
                            <button className="add-create" type="submit">
                              {isLoading ? (
                                <CircularProgress
                                  sx={{ color: "white" }}
                                  size={20}
                                />
                              ) : (
                                "Yangilash"
                              )}
                            </button>
                          </div>
                        </form>
                      </TabPanel>
                      <TabPanel
                        style={{ overflow: `hidden` }}
                        value={value}
                        index={1}
                        dir={theme.direction}
                      >
                        <ProModal />
                      </TabPanel>
                      <TabPanel
                        style={{ overflow: `hidden` }}
                        value={value}
                        index={2}
                        dir={theme.direction}
                      >
                        <ProModal />
                      </TabPanel>
                      <TabPanel
                        style={{ overflow: `hidden` }}
                        value={value}
                        index={3}
                        dir={theme.direction}
                      >
                        <ProModal />
                      </TabPanel>
                      <TabPanel
                        style={{ overflow: `hidden` }}
                        value={value}
                        index={4}
                        dir={theme.direction}
                      >
                        <ProModal />
                      </TabPanel>
                    </SwipeableViews>
                    <ThumbnailModal
                      show={thumbnailModal}
                      className="exit-modal thumbnail-modal"
                      contentLabel="Example Modal"
                    >
                      <ProModal />
                    </ThumbnailModal>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </div>
    </section>
  );
};

export default Edit;
