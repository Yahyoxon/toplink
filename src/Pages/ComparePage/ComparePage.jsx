import "./ComparePage.css";
import blockIcon from "../../../src/Assets/Img/blockIcon.png";
import Nav from "../../Components/Nav/Nav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ComparePage = () => {
  const [new_password1, setPassword1] = useState("");
  const [new_password2, setPassword2] = useState("");
  const [error, setError] = useState(null);
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");

  const changeComparePassword = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      let item = { new_password1, new_password2 };
      console.warn(item, "item");
      fetch("https://api.toplink.uz/api/v1/accounts/password-reset-confirm/", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }).then((result) => {
        result.json().then((res) => {
          console.log(res, "res chiqdi");
          setRes(res);
        });
      });
    } catch (error) {
      console.log(error, error.response.data.message);
      if (error.response.status === 400 || error.response.status === 401) {
        setError(error.response.data.message);
      } else {
        setError("");
      }
    }
  };

  return (
    <section className="compare-page code-forget-page">
      <Nav />
      <section className="register" style={{ minHeight: "100vh" }}>
        <div className="container">
          <h2 className="register-title">Parolni Unutdingizmi?</h2>
          <p className="register-text">
            Hisobingizga kirish uchun yangi parolni o'rnating!{" "}
          </p>
          <form className="register-form" onSubmit={changeComparePassword}>
            <div className="register-box">
              <label className="register-label">Yangi parolni kiriting</label>
              <span>
                <img src={blockIcon} alt="" className="register-icon" />
                <input
                  value={new_password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  type="password"
                  className="register-input"
                  required
                  placeholder="**********"
                />
              </span>
              <p className="register-error">siz notogri kiritdingiz</p>
            </div>
            <div className="register-box">
              <label className="register-label">Qayta yangi parol</label>
              <span>
                <img src={blockIcon} alt="" className="register-icon" />
                <input
                  type="password"
                  value={new_password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="register-input"
                  required
                  placeholder="**********"
                />
              </span>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <button className="register-btn" type="submit">
              Tasdiqlash
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ComparePage;
