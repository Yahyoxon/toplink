import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import People from "../../Components/People/People";
import Profile from "../../Components/Profile/Profile";
import Stastic from "../../Components/Statistic/Statistic";
import Useful from "../../Components/Useful/Useful";
import "./HomePage.css"

const HomePage=()=>{
    return(
        <div className="home-page">
            <Nav />
            <Header />
            <Useful />
            <People />
            <Profile />
            <Stastic />
            <Footer />
        </div>
    )
}
export default HomePage;
