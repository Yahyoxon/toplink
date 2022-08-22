import "./SignUpPages.css"
import SignUp from "../../Components/SignUp/SignUp";
import Nav from "../../Components/Nav/Nav";
 

const SignUpPages=()=>{
    return(
        <div className="signup-page">
             
   {/* <AdminHeader /> */}
   <Nav />
   <SignUp />
</div>
    )
}

export default SignUpPages;