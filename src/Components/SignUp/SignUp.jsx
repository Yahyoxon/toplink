import avatarIcon from "../../Assets/Img/Vector1.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import es from "react-phone-input-2/lang/es.json";
const SignUp = () => {
  return (
    <section className="register" style={{ minHeight: "100vh" }}>
      <div className="container">
        <h2 className="register-title">Ro‘yxatdan o‘tish</h2>
        <p className="register-text">
          O‘zingiz haqingizda ma’lumotlarni kiriting{" "}
        </p>
        <form className="register-form">
          <div className="register-box">
            <label className="register-label">To‘liq ism</label>
            <span>
              <img src={avatarIcon} alt="" className="register-icon" />
              <input
                type="text"
                className="register-input"
                required
                placeholder="Ex. Saul Ramirez"
              />
            </span>
            {/* <p className="register-error">siz notogri kiritdingiz</p> */}
          </div>
          <div className="register-box">
            <label className="register-label">Telefon nomer</label>
            <span>
              {/* <img src={blockIcon} alt="" className="register-icon" /> */}
              <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
                country="uz"
              />
            </span>
            {/* <p className="register-error">siz notogri kiritdingiz</p> */}
          </div>

          <button className="register-btn">Qabul qilish</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
