import React, { useContext, useEffect } from "react";
import AdminFooter from "../Components/AdminFooter/AdminFooter";
import AdminHeader from "../Components/AdminHeader/AdminHeader";
import Dashboard from "../Components/Dashboard/Dashboard";
import { GetProfiles } from "../services/query/get-profiles";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "lodash";
import { CircularProgress, Box } from "@mui/material";
import UserProfil from "../Components/UserProfil/UserProfil";
import { GetBackgroundColor } from "../services/query/get-background-color";
import { ChangeProfileContext } from "../Context/ProfileChangeContext";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const history = useNavigate();
  const userId = localStorage.getItem("id");
  const [isChangeProfile] = useContext(ChangeProfileContext);
  const { data, isSuccess, isFetching } = GetProfiles(userId, isChangeProfile);
  useEffect(() => {
    if (data) {
      if (pathname === "/" || pathname === "") {
        history(`/${get(data, "[0].username")}`);
      }
    }
  }, [data, pathname, history]);

  const username = pathname.substring(
    pathname.indexOf("/") + 1,
    pathname.indexOf("/") !== pathname.lastIndexOf("/")
      ? pathname.lastIndexOf("/")
      : pathname.length
  );

  /************************************* */

  const themeColors = GetBackgroundColor(username);

  return (
    <div>
      {!isFetching && isSuccess ? (
        <>
          <AdminHeader {...{ username }} />
          <div
            className={`edit-page
              adminProfile-page  
              adminProfile-page-${
                pathname === `/${username}`
                  ? themeColors?.data?.background_color
                  : ""
              }`}
          >
            {pathname !== `/${username}/user-profile` ? (
              <main className="main">
                <div className="container">
                  <Dashboard profileLists={data} {...{ username }} />
                  {children}
                </div>
              </main>
            ) : (
              <UserProfil />
            )}
          </div>
          <AdminFooter />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Layout;
