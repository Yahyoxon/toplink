import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatnContext } from "../../Context/TextContext";
import { Context } from "../../Context/ThemeContext";

const MapsIcon = ()=>{
    // const [theme, setTheme] = useContext(Context);
    // const [text,setText]=useContext(MatnContext);
    const {username} = useParams();

    const [themeColors,setThemeColors] = useState();

    useEffect(() => {
      fetch(`https://api.toplink.uz/api/v1/accounts/change-background-color/${username}/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((colors) => {
          setThemeColors(colors);
        });
    }, []);
    
    return(
        <svg width="16" height="19" style={{marginTop: "3px"}} viewBox="0 0 16 19"   xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00065 5.20801C6.27476 5.20801 4.87565 6.60712 4.87565 8.33301C4.87565 10.0589 6.27476 11.458 8.00065 11.458C9.72654 11.458 11.1257 10.0589 11.1257 8.33301C11.1257 6.60712 9.72654 5.20801 8.00065 5.20801ZM6.12565 8.33301C6.12565 7.29747 6.96512 6.45801 8.00065 6.45801C9.03618 6.45801 9.87565 7.29747 9.87565 8.33301C9.87565 9.36854 9.03618 10.208 8.00065 10.208C6.96512 10.208 6.12565 9.36854 6.12565 8.33301Z"   className={` main-icon main-icon-${themeColors?.background_color}`}    />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00065 0.208008C3.9312 0.208008 0.708984 3.74365 0.708984 8.00692C0.708984 9.37419 1.38824 10.9842 2.24285 12.4951C3.1113 14.0305 4.21972 15.5632 5.19151 16.8024L5.22393 16.8438C5.69826 17.4487 6.10235 17.9641 6.49419 18.32C6.92168 18.7083 7.3931 18.9626 8.00065 18.9626C8.6082 18.9626 9.07962 18.7083 9.50711 18.32C9.89896 17.964 10.303 17.4487 10.7774 16.8437L10.8098 16.8024C11.7816 15.5632 12.89 14.0305 13.7585 12.4951C14.6131 10.9842 15.2923 9.37419 15.2923 8.00692C15.2923 3.74365 12.0701 0.208008 8.00065 0.208008ZM1.95898 8.00692C1.95898 4.3461 4.7063 1.45801 8.00065 1.45801C11.295 1.45801 14.0423 4.3461 14.0423 8.00692C14.0423 9.029 13.5093 10.3966 12.6704 11.8797C11.8454 13.3383 10.7792 14.8158 9.82617 16.0311C9.31036 16.6888 8.97076 17.1185 8.66664 17.3947C8.38928 17.6467 8.20413 17.7126 8.00065 17.7126C7.79717 17.7126 7.61202 17.6467 7.33467 17.3947C7.03055 17.1185 6.69094 16.6888 6.17514 16.0311C5.22214 14.8158 4.15589 13.3383 3.33086 11.8797C2.492 10.3966 1.95898 9.029 1.95898 8.00692Z"  className={` main-icon main-icon-${themeColors?.background_color}`}  />
        </svg>
    )
}

export default MapsIcon;