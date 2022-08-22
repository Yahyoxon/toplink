import Login from "../../Components/Login/Login";
import Nav from "../../Components/Nav/Nav";
import "./LoginPage.css"

const LoginPage=()=>{
    return(
            <section className="login-page">
                {/* <AdminHeader /> */}
                <Nav />
                <Login />
            </section>
    )
}

export default LoginPage;