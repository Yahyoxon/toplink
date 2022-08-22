import "./AccountKarta.css"
import 'react-phone-input-2/lib/style.css'

const AccountKarta =()=>{
    return(
            <section className="accountKarta">
             <div className="accountKarta-first">   
               <div className="accountKarta-footer">
                <div className="accountKarta-headers">
                Karta qo’shish
                </div>
                <form  className="accountKarta-form">
                 <div className="accountKarta-span">   <label>
                    To’liq Ism
                    </label>
                    <input className="accountKarta-input" type="text" required placeholder="Husanboy Tursunov" />
                    </div>
                    <div className="accountKarta-span">   <label>
                    Kredit/Debit  karta 
                    </label>
                    <input className="accountKarta-input" 
                    type="text" 
                    required placeholder="Kredit/Debit  karta " />
                    </div>
                   <div className="accountKarta-footers">
                   <button className="accountKarta-button">
                   Bekor qilish
                    </button> <button className="accountKarta-button">
                   Saqlash
                    </button>
                   </div>
                   
                    </form>
               </div>
               </div>
          
            </section>
    )
}

export default AccountKarta;