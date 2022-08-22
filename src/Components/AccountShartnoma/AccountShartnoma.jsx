

import "./AccountShartnoma.css"
import 'react-phone-input-2/lib/style.css'
import { Link, useParams } from "react-router-dom"

const AccountShartnoma=()=>{
    const {username}=useParams();
    return(
            <section className="account-shartnoma">
                    <div className="account-shartnoma-top">
                    <Link to={`/${username}/accountShartnoma`} className="account-btn">
                 Shartnoma
                 </Link>
                  <Link to={`/${username}/account`} className="account-btn">
                 Account
                 </Link>
                
                </div>
                <div className="account-shartnoma-box">
                    <h3 className="account-shartnoma-subtitle">
                    Takliflar
                    </h3>
                    <div className="account-shartnoma-footer">
                    Sizda hali takliflar yoq
                    </div>
                </div>
           
                <div className="account-shartnoma-box account-shartnoma-box2">
                  <div className="account-shartnoma-blok"> 
                  <h3 className="account-shartnoma-subtitle">
                    Karta kiritish
                    </h3>
                    <button className="account-shartnoma-btn">
                    Karta qo’shish
                    </button>
                    </div> 
                    <div className="account-shartnoma-footer">
                    Sizda hali kiritilgan kartalar yoq
                    </div>
                </div>
           
              
            </section>
    )
}

export default AccountShartnoma;