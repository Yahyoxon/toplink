import "./PremiumDomen.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import es from 'react-phone-input-2/lang/es.json'
import Prem1 from "../../Assets/Img/y2.png"
import Prem2 from "../../Assets/Img/y1.png"
import Prem3 from "../../Assets/Img/y3.png"

const PremiumDomen =()=>{
return(
<section className="premiumDomen">
    <div className="premiumDomen-first">
        <div className="premiumDomen-footer">
            <div className="premiumDomen-headers">
                <p> Maxsus domen</p>
                <button>O’chirish</button>
            </div>

            <form className="premiumDomen-form">
                <div className="premiumDomen-span">
                    <label>
                        Domen
                    </label>
                    <input className="premiumDomen-input" type="text" required placeholder="example.com" />
                </div>

                <div className="premiumDomen-footers">
                    <button className="premiumDomen-button">
                        Saqlash
                    </button>
                </div>

            </form>
        </div>
    </div>
    <div className="premiumDomen-second">
        <div className="premiumDomen-footer">
            <div className="premiumDomen-headers">
                <p> Piksellarni kuzatish</p>

            </div>

            <form className="premiumDomen-form">
                <div className="premiumDomen-blok">
                    <div className="premiumDomen-span">
                        <label>
                            Facebook Pixel
                        </label>
                        <input className="premiumDomen-input" type="text" required placeholder="0000000000000000" />
                    </div>

                    <div className="premiumDomen-span">
                        <label>
                            Facebook Pixel
                        </label>
                        <input className="premiumDomen-input" type="text" required placeholder="0000000000000000" />
                    </div>
                </div>
                <div className="premiumDomen-footers">
                    <button className="premiumDomen-button">
                        Saqlash
                    </button>
                </div>

            </form>
        </div>
    </div>

    <div className="premiumDomen-third">
        <div className="premiumDomen-footer">
            <div className="premiumDomen-headers">
                <p>Obuna bo’lish formasi</p>
                <button>O’chirish</button>
            </div>
<ul className="premiumDomen-list">
    <li className="premiumDomen-item">
        <a href="#" className="premiumDomen-link">
            <img src={Prem1} alt="" className="premiumDomen-img" />
        </a>
    </li>
    <li className="premiumDomen-item">
        <a href="#" className="premiumDomen-link">
            <img src={Prem2} alt="" className="premiumDomen-img" />
        </a>
    </li>
    <li className="premiumDomen-item">
        <a href="#" className="premiumDomen-link">
            <img src={Prem3} alt="" className="premiumDomen-img" />
        </a>
    </li>
    
</ul>

        </div>
    </div>
</section>
)
}

export default PremiumDomen;