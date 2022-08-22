

import "./AnalyticYangilash.css"

const AnalyticYangilash=()=>{
    return(
            <section className="analyticYangilash">
               <div className="analyticYangilash-header">
                <div className="analyticYangilash-top">
                   <span>
                    1
                </span>
                <h3 className="analyticYangilash-title">
                Obuna haqida umumiy ma'lumot
                </h3>
                </div>
                <ul className="analyticYangilash-list">
                    <li className="analyticYangilash-item">
                        <p className="analyticYangilash-text">
                        Professional tarifi
                        </p>
                       <div className="analyticYangilash-line"></div>
                        <div className="analyticYangilash-money">
                            <span>
                            $9
                            </span>
                            <p>/ Oylik</p>
                        </div>
                    </li>
                    <li className="analyticYangilash-item">
                        <p className="analyticYangilash-text">
                        Jami
                        </p>
                       <div className="analyticYangilash-line"></div>
                        <div className="analyticYangilash-money">
                            <span>
                            $9.00
                            </span>
                             
                        </div>
                    </li>
                </ul>
               </div>
               <div className="analyticYangilash-footer">
                <div className="analyticYangilash-top">
                   <span>
                    2
                </span>
                <h3 className="analyticYangilash-title">
                To'lov ma'lumotlari
                </h3>
                </div>
                <form  className="analyticYangilash-form">
                 <div className="analyticYangilash-span">   <label>
                    To’liq Ism
                    </label>
                    <input className="analyticYangilash-input" type="text" required placeholder="Husanboy Tursunov" />
                    </div>
                    <div className="analyticYangilash-span">   <label>
                    To’lov kartasi
                    </label>
                    <input className="analyticYangilash-input" type="text" required placeholder="Karta raqam" />
                    </div>
                    <button className="analyticYangilash-btn">
                    Hozir yangilash
                    </button>
                    </form>
               </div>
            </section>
    )
}

export default AnalyticYangilash;