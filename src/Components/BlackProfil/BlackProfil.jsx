import { Link } from "react-router-dom";
import "./BlackProfil.css"
import adminLogo from "../../../src/Assets/Img/LogoImg.png"
import adminMenu from "../../../src/Assets/Img/menu.png"
import AdminHeader from "../../Components/AdminHeader/AdminHeader";
import Dashboard from "../../Components/Dashboard/Dashboard";
import CopyImg from "../../Assets/Img/fi_copy.png";
import mainMap from "../../Assets/Img/map.png";

import mainAvatar from "../../Assets/Img/avatar.png";

import mainAvatar1 from "../../Assets/Img/avatar1.png";
function copyForm(elementName) {
document.getElementById(elementName).select();
document.execCommand('copy');
}


const BlackProfil=()=>{
return(

<section className="black-profil main-right">
    <form className="main-form">
        <input id='some-hijacked-input' className="main-input" type='text' defaultValue='http://toplink/husanboy07' />
        <button type="button" className="main-btn" onClick={()=>{
            document.getElementById("some-hijacked-input").select();
            document.execCommand('copy');
            }}>
            <img src={CopyImg} alt="" className="copy-img" />
        </button>
    </form>
    <div className="main-bottom">
        <img src={mainAvatar1} alt="" className="main-avatar" />
        <div className="main-blok">
            <h2 className="main-name">
                Husanboy07
            </h2>
            <div className="main-map">
                <img src={mainMap} alt="" className="main-icon" />
                <p className="main-text">
                    Toshkent, Olmazor
                </p>
            </div>
            <p className="main-subname">
                Husanboy Tursunov Mo’ydinjon o’g’li
            </p>
        </div>
    </div>
</section>

)
}

export default BlackProfil;