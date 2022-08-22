import "./Profile.css";
import profileImg from "../../Assets/Img/iPhone.png"
import Fade from 'react-reveal/Fade';
import iphone from '../../Assets/Img/iPhone 13 Pro.png'

const Profile =()=>{
    return(
        <section className="profile">
            <div className="container">
            <Fade bottom>
            <div className="profile-left">
                <img src={profileImg} alt="profileImg" className="profile-img" />
              <img src={iphone} alt="ProfileImg" className="profileImgs" />
            </div>
            <div className="profile-right">
                <h2 className="profile-title">
                Profilingizni shaxsiylashtiring
                </h2>
                <p className="profile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque nec ex in nunc cursus posuere at non augue. </p>
            </div>
            </Fade>
            </div>
        </section>
    )
}

export default Profile;