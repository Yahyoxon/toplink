import "./Content.css";
import contentImg from "../../Assets/Img/contentImg.png";


const Content=()=>{
    return (
        <section className="content">
            <div className="container">
                <div className="content-top">
                    <h2 className="content-title">
                    Sizning havolalaringiz. Sizning kontentingiz.
                    </h2>
                    <p className="content-text">
                    Har qanday platformadan havola qo'shing. Quyida bizning sevimlilarimizdan ba'zilari
                    </p>

                </div>
                <div className="content-bottom">
                    <img src={contentImg} alt="contentImg" className="content-img" />
                </div>
            </div>
        </section>
    )
}

export default Content;