import "./Useful.css";
import LogoImg from "../../Assets/Img/LogoImg.png";
import menuIcon from "../../Assets/Img/menu.png";
import CopyImg from "../../Assets/Img/copy.png";
import Fade from 'react-reveal/Fade';

function copyForm(elementName) {
document.getElementById(elementName).select();
document.execCommand('copy');
}
const Useful = ()=>{


return(
<section className="useful">
    <div className="container">
    <Fade bottom>
        <h2 className="useful-title">
            Toplinkdan foydalaning
        </h2>
        <p className="useful-text">
            Havolangizga daʼvo qilish uchun pastga foydalanuvchi nomingizni kiriting
        </p>
        <form className="useful-form">
         <button type="button" className="useful-btn" onClick={()=>{
            document.getElementById("some-hijacked-input").select();
            document.execCommand('copy');
            }}>
                <img src={CopyImg} alt="" className="copy-img" />
            </button>
        <input id='some-hijacked-input'
         className="useful-input" type='text'
          defaultValue='Toplink.uz/' />
</form>
     </Fade>

    </div>
</section>
)
}

export default Useful;