 
import "./Work.css";
// import regImg from "../../Assets/Img/regImg.png"
// import linkImg from "../../Assets/Img/123Img1.png"
// import kontentImg from "../../Assets/Img/kontentImg1.png"
import regImg from "../../Assets/Img/444.png"
import linkImg from "../../Assets/Img/555.png"
import kontentImg from "../../Assets/Img/666.png"

const Work=()=>{
    return(
        <div className="work">
            <div className="container">
                <div className="work-top">
                    <h2 className="work-title">U qanday ishlaydi</h2>
                    <p className="work-text">
                    Bizning universal havolamiz sizning do‘stlaringizga barcha kontentingizga bir joydan kirish imkonini beradi va sizga ko'proq baham ko'rish imkonini beradi.
                    </p>
                </div>
                <div className="work-medium">
                    <ul className="work-list">
                        <li className="work-item">
                            <img src={regImg} alt="" className="work-img" />
                        </li>
                        <li className="work-item">
                            <h3 className="work-subtitle">
                            Toplinkda hisobingizni yarating
                            </h3>
                        </li>
                        <li className="work-item">
                            <h3 className="work-subtext">
                            Foydalanuvchi nomini tanlang, profilingizni sozlang va havolalaringizni qo'shing.
                            </h3>
                        </li>
                    </ul>
                    <ul className="work-list">
                        <li className="work-item">
                            <img src={linkImg} alt="" 
                            className="work-img" />
                        </li>
                        <li className="work-item">
                            <h3 className="work-subtitle">
                            Linkdan  ko'proq foydalaning
                            </h3>
                        </li>
                        <li className="work-item">
                            <h3 className="work-subtext">
                            Havolani nusxa oling va undan istalgan ijtimoiy platformada foydalaning.
                            </h3>
                        </li>
                    </ul>
                    <ul className="work-list">
                        <li className="work-item">
                            <img src={kontentImg} alt="" className="work-img" />
                        </li>
                        <li className="work-item">
                            <h3 className="work-subtitle">
                            Kontentingizni ko'proq baham ko'ring
                            </h3>
                        </li>
                        <li className="work-item">
                            <h3 className="work-subtext">
                            Bitta kuchli havola orqali obunachilaringizga koʻproq maʼlumotlarga kirish imkonini bering.
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
      
        </div>
    )
}

export default Work;