import "./Forget.css";
import emailIcon from "../../../src/Assets/Img/emailIcon.png";
import blockIcon from "../../../src/Assets/Img/blockIcon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Api from "../../Api/Api";
import { ToastContainer, toast } from "react-toastify";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const history = useNavigate();
  const [code, setCode] = useState("");
  const [res, setRes] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  // console.log(visible)

  const changeForgetPassword = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await Api.post(
        "/password-reset/",
        {
          email,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.status == 201 || res.status == 200) {
        setVisible(true);
      }
    } catch (error) {
      console.log(error, error.response.data.message);
      if (error.response.status === 400 || error.response.status === 401) {
        setError(error.response.data.message);
      } else {
        setError("Successfully");
      }
    }
  };

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
      // console.log(res)
      if (res.status == 201 || res.status == 200) {
        setHidden(true);
      }

      // history("/passwordcompare")
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.status === 400 || error.response.status === 401) {
        setError(error.response.data.message);
      } else {
        setError("");
      }
    }
  };
  const [errorPassword1, setErrorPassword1] = useState(null);
  const [errorPassword2, setErrorPassword2] = useState(null);

  const changeComparePassword = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      let item = { email, password1, password2 };

      fetch("https://api.toplink.uz/api/v1/accounts/password-reset-confirm/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }).then((result) => {
        result.json().then((res) => {
          setRes(res);

          if (password1 === password2) {
            history("/loginpage");
            window.location.reload();
          } else {
            setError("passwordlar bir xil bo'lishi kerak");
            setErrorPassword1(res?.data?.password1);
            setErrorPassword2(res?.data?.password2);
            toast.error("Passwordlar bir xil bo'lishi kerak", {
              position: "top-right",
            });
          }
        });
      });
    } catch (error) {
      console.log(error, res.message, "error chiqdi");
      if (res.status === false || error.status === false) {
        setError("passwordlar bir xil bo'lishi kerak");
        toast.error("Passwordlar bir xil bo'lishi kerak", {
          position: "top-right",
        });
      } else {
        setError("");
      }
    }
  };

  return (
    <section className="register">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      {!visible ? (
        <div className="container container-top">
          <h2 className="register-title">Parolni Unutdingizmi?</h2>
          <p className="register-text">
            Agar parolni unutgan bo'lsangiz, parolingizni tiklang!{" "}
          </p>
          <form className="register-form" onSubmit={changeForgetPassword}>
            <div className="register-box">
              <label className="register-label">Elektron pochta</label>
              <span>
                <img src={emailIcon} alt="" className="register-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="register-input"
                  required
                  placeholder="Ex: abc@example.com"
                />
              </span>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            <button
              type="submit"
              id="forgetBtn"
              className="register-btn"
              style={{ padding: "8px 5px" }}
            >
              Qabul qilish
            </button>
          </form>
        </div>
      ) : (
        !hidden && (
          <div className="container container-bottom">
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

              <button
                type="submit"
                style={{ padding: "8px 5px" }}
                className="register-btn"
                id="codeBtn"
              >
                Qabul qilish
              </button>
            </form>
          </div>
        )
      )}

      {hidden && (
        <div className="container container-footer">
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
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  type="password"
                  className="register-input"
                  required
                  placeholder="**********"
                />
              </span>
              {errorPassword1 && (
                <p style={{ color: "red" }}>{errorPassword1}</p>
              )}
            </div>
            <div className="register-box">
              <label className="register-label">Qayta yangi parol</label>
              <span>
                <img src={blockIcon} alt="" className="register-icon" />
                <input
                  type="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="register-input"
                  required
                  placeholder="**********"
                />
              </span>
              {errorPassword2 && (
                <p style={{ color: "red" }}>{errorPassword2}</p>
              )}
            </div>
            <button
              // onClick={updateUser}
              className="register-btn"
              type="submit"
            >
              Tasdiqlash
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Forget;
