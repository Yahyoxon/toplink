import "./People.css";
import PeopleImg from "../../Assets/Img/PeopleImg.png"
import Fade from 'react-reveal/Fade';

const People =()=>{
    return(
        <section className="people">
                 <Fade bottom>
            <div className="container">
            <div className="people-left">
                <h2 className="people-title">
                Bizni minglab odamlar sevadi
                </h2>
                <p className="people-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, felis et bibendum finibus, risus quam sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque nec ex in nunc cursus posuere at non augue. 
                </p>
            </div>
            <div className="people-right">
                <img src={PeopleImg} alt="PeopleImg" className="people-img" />
            </div>
            
            </div>
            </Fade>
        </section>
    )
}

export default People;