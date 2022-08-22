import "./Statistic.css";
import statisticImg from "../../Assets/Img/loop.png"
import Fade from 'react-reveal/Fade';

import microImg from "../../Assets/Img/microImg.svg"
import mailImg from "../../Assets/Img/Mail.ru.svg"
import twitterImg from "../../Assets/Img/Twitter.svg"
import masterImg from "../../Assets/Img/MasterCard.svg"
import shutterImg from "../../Assets/Img/Shutterstock.png"
import sberImg from "../../Assets/Img/Sberbank.png"
import spotifyImg from "../../Assets/Img/Spotify.svg"

const Statistic =()=>{
return(
<section className="statistic">
    <div className="container">
        <Fade bottom>
            <div className="statistic-left">
                <h2 className="statistic-title">
                    Har vaqt Toplinkda statistikani qabul qiling
                </h2>
                <p className="statistic-text">
                    Tomoshabinlar qaysi kontentga ko‘proq qiziqish bildirishini bilish uchun profil ko‘rinishlari va
                    alohida havola bosishlarini kuzating. </p>
            </div>
        </Fade>
        {/* <Fade bottom> */}
            <div className="statistic-right">
                <div className="img-left">
                    <div className="img-box1">
                        <img src={microImg} alt="microImg" className="micro-img" />
                        <p className="img-text">899</p>
                    </div>
                    <div className="img-box2">
                        <img src={mailImg} alt="microImg" className="micro-img" />
                        <p className="img-text">1,227</p>
                    </div>
                    <div className="img-box3">
                        <img src={twitterImg} alt="microImg" className="micro-img" />
                        <p className="img-text">1,124</p>
                    </div>
                    <div className="img-box4">
                        <img src={masterImg} alt="microImg" className="micro-img" />
                        <p className="img-text">985</p>
                    </div>
                    <div className="img-box5">
                        <img src={shutterImg} alt="microImg" className="micro-img" />
                        <p className="img-text">680</p>
                    </div>
                    <div className="img-box6">
                        <img src={sberImg} alt="microImg" className="micro-img" />
                        <p className="img-text">703</p>
                    </div>
                    <div className="img-box7">
                        <img src={spotifyImg} alt="microImg" className="micro-img" />
                        <p className="img-text">1,035</p>
                    </div>
                </div>
                <div className="img-right">
                    <img src={statisticImg} alt="statisticImg" className="statistic-img" />


                </div>

            </div>
        {/* </Fade> */}
    </div>
</section>
)
}

export default Statistic;