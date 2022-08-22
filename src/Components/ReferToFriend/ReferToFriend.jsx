import "./ReferToFriend.css"

import referAvatar from "../../Assets/Img/referAvatar.png"
const ReferToFriend=()=>{
    return(
            <section className="refer">
                <div className="refer-top">
                Doʻstingizga murojaat qiling va u roʻyxatdan oʻtganida bir oylik bepul Pro-ga ega boʻling!
                </div>
              <div className="refer-medium">
                <h2 className="refer-title">
                Havolalarni bosish
                </h2>
                <form className="refer-form">
                    <input type="email" placeholder="Elektron pochta" required className="refer-input" />
                <button className="refer-btn">
                Taklif qiling
                </button>
                </form>
              </div>
                <div className="refer-bottom">
                    <div className="refer-box">
                    Referallar
                    </div>
                    <div className="refer-footer">
                    <div className="refer-item refer-items">
                                <div className="refer-left">
                                Referallar
                                </div>
                                <div className="refer-right">
                                    <div className="refer-box1">
                                    Yuborildi
                                    </div>
                                    <div className="refer-box2">
                                    Holati
                                    </div>
                                </div>
                            </div>
                        <ul className="refer-list">
                            <li className="refer-item">
                                <div className="refer-left">
                                <img src={referAvatar} alt="" className="refer-avatar" />
                                <p className="refer-name">
                                tursunov1998@gmail.com
                                </p>
                                </div>
                                <div className="refer-right">
                                    <div className="refer-time">
                                    2 soat oldin    
                                    </div>
                                    <div className="refer-state">
                                    Kutilmoqda
                                    </div>
                                </div>
                            </li>
                            <li className="refer-item">
                                <div className="refer-left">
                                <img src={referAvatar} alt="" className="refer-avatar" />
                                <p className="refer-name">
                                tursunov1998@gmail.com
                                </p>
                                </div>
                                <div className="refer-right">
                                    <div className="refer-time">
                                    2 soat oldin    
                                    </div>
                                    <div className="refer-state">
                                    Kutilmoqda
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
    )
}

export default ReferToFriend;