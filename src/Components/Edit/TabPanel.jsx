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
import Typography from "@mui/material/Typography";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import { useState } from "react";
import ProModal from "../Modal/ProModal";
import { useForm } from "react-hook-form";
import { useLinkCreate } from "../../services/mutations/create-link";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

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

export default function FloatingActionButtonZoom({
  profileId,
  isChanged,
  setIsChanged,
  setExpanded,
}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { mutate, isLoading } = useLinkCreate();
  const [thumbnailModal, setThumbnailModalOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const validationSchema = yup.object({
    icon_url: yup
      .string("")
      .matches(/https:/, "URL noto'g'ri kiritildi!")
      .required("To'ldirish majburiy"),
    icon_name: yup.string("").required("To'ldirish majburiy"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      icon_name: "",
      icon_url: "",
    },
  });
  const changeLink = async (values) => {
    const requestData = {
      icon_name: values?.icon_name,
      icon_url: values?.icon_url,
      profile: profileId,
    };
    mutate(requestData, {
      onSuccess: () => {
        toast.success("Havola muvaffaqiyatli yaratildi!", {
          position: "top-right",
        });
        setExpanded(false);
        setIsChanged(!isChanged);
      },
      onError: () => {
        toast.error("Nimadir xato qilindi!", {
          position: "top-right",
        });
      },
    });
  };

  return (
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
          onChange={handleChange}
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
          {/* <ToastContainer /> */}
          <form className="add-form" onSubmit={handleSubmit(changeLink)}>
            <div className="add-box">
              <label className="add-label">Name</label>
              <input
                type="text"
                className="add-input"
                placeholder="Twitter"
                {...register("icon_name")}
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
                type="text"
                className="add-input"
                placeholder="https//Linkedn.com/husanboytursunov"
                {...register("icon_url")}
              />
              {errors?.icon_url && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {errors?.icon_url?.message}
                </p>
              )}
            </div>
            <div className="add-footer" style={{ justifyContent: "flex-end" }}>
              <button className="add-create" type="submit">
                {isLoading ? (
                  <CircularProgress sx={{ color: "white" }} size={20} />
                ) : (
                  "Yaratish"
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
        <div className="pro-box">
          <p>Upgrade to Pro to get access to this feature and many more!</p>
          <button className="pro-btn">Upgrade now</button>
        </div>
      </ThumbnailModal>
    </Box>
  );
}
