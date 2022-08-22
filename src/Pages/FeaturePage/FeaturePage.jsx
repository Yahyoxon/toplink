import "./FeaturePage.css";
import futureImg from "../../Assets/Img/123q.png"
import futureImg2 from "../../Assets/Img/kontentImg.png"
import futureImg3 from "../../Assets/Img/iPhone.png"
import futureImg4 from "../../Assets/Img/futureImg4.png"
import futureImg6 from "../../Assets/Img/123.png"
import futureImg7 from "../../Assets/Img/display.png"
import futureImg8 from "../../Assets/Img/1234Img.png"
import futureImg9 from "../../Assets/Img/qw0.png"
import futureImg10 from "../../Assets/Img/qw.png"
import microImg from "../../Assets/Img/microImg.svg"
import mailImg from "../../Assets/Img/Mail.ru.svg"
import twitterImg from "../../Assets/Img/Twitter.svg"
import masterImg from "../../Assets/Img/MasterCard.svg"
import shutterImg from "../../Assets/Img/Shutterstock.png"
import sberImg from "../../Assets/Img/Sberbank.png"
import spotifyImg from "../../Assets/Img/Spotify.svg"
import statisticImg from "../../Assets/Img/loop.png"
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Fade from 'react-reveal/Fade';

const FeaturePage=()=>{
return(
<div className="future-page">
    <Nav />
    <div className="container">
        <Fade bottom>
            <div className="future-top">
                <h2 className="future-title">
                    Xususiyat
                </h2>
                <p className="future-text">
                    Bizning universal havolamiz sizning do‘stlaringizga barcha kontentingizga bir joydan kirish imkonini
                    beradi va sizga ko'proq baham ko'rish imkonini beradi.
                </p>
            </div>
        </Fade>
        <Fade bottom>
            <div className="future-bottom">
                <div className="future-left">
                    <h2 className="future-subtitle">
                        Yagona havola orqali bir nechta yo‘nalishlar
                    </h2>
                    <p className="future-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et
                        bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa.
                        Pellentesque nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus
                    </p>

                </div>
                <div className="future-right">
                    <img src={futureImg} alt="" 
                    className="future-img" />
                </div>
            </div>
        </Fade>
        <Fade bottom>
            <div className="future-bottom">
                <div className="future-left">
                    <img src={futureImg2} alt="" className="future-img" />
                </div>
                <div className="future-right">
                    <h2 className="future-subtitle">
                        Haqiqiy vaqt tahlili </h2>
                    <p className="future-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et
                        bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa.
                        Pellentesque nec ex in nunc cursus posuere at non augue. Pellentesque nec ex in nunc cursus
                        posuere at non augue. </p>

                </div>

            </div>
        </Fade>
        <Fade bottom>
            <div className="future-bottom">
                <div className="future-left">
                    <h2 className="future-subtitle">
                        Profilni moslashtirish </h2>
                    <p className="future-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et
                        bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa.
                        Pellentesque nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus
                    </p>

                </div>
                <div className="future-right">
                    <img src={futureImg3} alt="" className="future-img" />
                </div>
            </div>
        </Fade>
        <Fade bottom>
            <div className="future-bottom">
                <div className="future-left">
                    <img src={futureImg4} alt="" className="future-img" />
                </div>
                <div className="future-right">
                    <h2 className="future-subtitle">
                        Boshqarilishi oson </h2>
                    <p className="future-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et
                        bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa.
                        Pellentesque nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus
                    </p>

                </div>

            </div>
        </Fade>
        <Fade bottom>
            <div className="future-bottom">
                <div className="future-left">
                    <h2 className="future-subtitle">
                    Har vaqt hamma joyda ishlaydi </h2>
                    <p className="future-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et
                        bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa.
                        Pellentesque nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus
                    </p>

                </div>
                <div className="future-right">
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

            </div></div>
            </div>
        </Fade>
        <Fade bottom>
            <div className="future-bottom">
                <div className="future-left">
                    <img src={futureImg7} alt="" className="future-img" />
                </div>
                <div className="future-right">
                    <h2 className="future-subtitle">
                    Displey rejimi </h2>
                    <p className="future-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et
                        bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa.
                        Pellentesque nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus
                    </p>

                </div>

            </div>
        </Fade> <Fade bottom>
            <div className="future-bottom">
                <div className="future-left">
                    <h2 className="future-subtitle">
                    Yagona havola orqali bir nechta yo‘nalishlar</h2>
                    <p className="future-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et
                        bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa.
                        Pellentesque nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus
                    </p>

                </div>
                <div className="future-right">
                    <img src={futureImg8} alt="" className="future-img" />
                </div>
            </div>
        </Fade>
        <Fade bottom>
            <div className="future-bottom">
                <div className="future-left">
                    <img src={futureImg9} alt="" className="future-img" />
                </div>
                <div className="future-right">
                    <h2 className="future-subtitle">
                    Haqiqiy vaqt tahlili </h2>
                    <p className="future-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et
                        bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa.
                        Pellentesque nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus
                    </p>

                </div>

            </div>
        </Fade> <Fade bottom>
            <div className="future-bottom">
                <div className="future-left">
                    <h2 className="future-subtitle">
                    Yagona havola orqali bir nechta yo‘nalishlar</h2>
                    <p className="future-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et
                        bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa.
                        Pellentesque nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus
                    </p>

                </div>
                <div className="future-right">
                    <img src={futureImg10} alt="" className="future-img" />
                </div>
            </div>
        </Fade>
   
    </div>
    <Footer />
</div>
)
}

export default FeaturePage;