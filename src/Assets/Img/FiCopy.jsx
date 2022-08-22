import { useContext } from "react";
import { Context } from "../../Context/ThemeContext";

const FiMap=()=>{
    const  [theme,setTheme] =useContext(Context);
    // console.log(theme)
    return( 
        <svg className={`main-icon map-svg map-svg-${theme}`} version="1.1" xmlns="http://www.w3.org/2000/svg"
        
        viewBox="0 0 362.13 362.13" 
        //  enable-background="new 0 0 362.13 362.13"
         >
        <g className={`main-icon map-svg map-svg-${theme}`} >
          <path  className={`main-icon map-svg map-svg-${theme}`}  d="m181.065,0c-75.532,0-136.981,61.45-136.981,136.981 0,31.155 21.475,76.714 63.827,135.411 30.619,42.436 60.744,75.965 62.011,77.372l11.144,12.367 11.144-12.367c1.267-1.406 31.392-34.936 62.011-77.372 42.352-58.697 63.827-104.255 63.827-135.411-0.001-75.531-61.451-136.981-136.983-136.981zm0,316.958c-37.733-44.112-106.981-134.472-106.981-179.977 0-58.989 47.991-106.981 106.981-106.981s106.981,47.992 106.981,106.981c0.001,45.505-69.248,135.865-106.981,179.977z"/>
          <circle className={`main-icon map-svg map-svg-${theme}`}  cx="181.065" cy="136.982" r="49.696"/>
        </g>
      </svg>
        
    )
}
export default FiMap;