import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import Work from "../../Components/Work/Work";
import "./WorkPage.css";

const WorkPage=()=>{
    return(
        <div className="work-page">
            <Nav />
            <Work />
            <Content />
            <Footer />
        </div>
    )
}

export default WorkPage;