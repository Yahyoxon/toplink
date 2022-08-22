import Nav from "../../Components/Nav/Nav";
import { useState } from "react";
import Api from "../../Api/Api";
import { useNavigate } from "react-router-dom";

const CodeForgetPage = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");

  const changeCodeForgetPage = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await Api.post(
        "/password-reset-check/",
        {
          confirm_code: code,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setRes(res);
      console.log(res, "res chiqdi");
      history("/passwordcompare");
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.status === 400 || error.response.status === 401) {
        setError(error.response.data.message);
      } else {
        setError("Successfully");
      }
    }
  };
  return (
    <section className="code-forget-page">
      <Nav />
      <section className="register" style={{ minHeight: "100vh" }}>
        <div className="container">
          <h2 className="register-title">Parolni Unutdingizmi?</h2>
          <p className="register-text">
            Biz sizning elektron pochtangizga tasdiqlash kodi bilan xat
            yubordik!
          </p>
          <form className="register-form" onSubmit={changeCodeForgetPage}>
            <div className="register-box">
              <label className="register-label">Verification Code</label>
              <span>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="register-input"
                  required
                  placeholder="EX: 123456"
                />
              </span>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            <button type="submit" className="register-btn">
              Qabul qilish
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default CodeForgetPage;
