import { Link, useLocation, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import Nav from "../../Components/Nav/Nav";
import avatarIcon from "../../Assets/Img/Vector1.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../Components/Register/Register.css";
import emailIcon from "../../../src/Assets/Img/emailIcon.png";
import blockIcon from "../../../src/Assets/Img/blockIcon.png";
import linkIcon from "../../../src/Assets/Img/linkIcon.png";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useRegister } from "../../services/mutations/register";
import { useLogin } from "../../services/mutations/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .required("To'ldirish majburiy!")
    .email("Email to'gri kiritilmadi!"),
  password: yup.string().required("To'ldirish majburiy!"),
  username: yup.string().required("To'ldirish majburiy!"),
  phone_number: yup
    .string()
    .required("To'ldirish majburiy!")
    .min(12, "Telefon raqam noto'gri kiritildi!"),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues: {
      email: "",
    },
  });

  const history = useNavigate();
  const uselogin = useLogin();
  const { mutate, isLoading } = useRegister();
  const { search } = useLocation();

  const changeSinging = async (values) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Ro'yhatdan o'tish muvaffaqiyli amalga oshirildi!", {
          position: "top-right",
        });
        uselogin.mutate(
          { email: values.email, password: values.password },
          {
            onSuccess: (res) => {
              localStorage.setItem("token", res?.access);
              localStorage.setItem("id", res?.user_id);
              history("/");
              window.location.reload();
            },
          }
        );
      },
      onError: (err) => {
        toast.error(
          err?.response?.data?.email
            ? err?.response?.data?.email[0]
            : err?.response?.data?.username[0],
          {
            position: "top-right",
          }
        );
      },
    });
  };
  useEffect(() => {
    if (errors?.phone_number) {
      toast.error(errors?.phone_number?.message, {
        position: "top-right",
      });
      history("/register-page");
    }
  }, [errors?.phone_number, history]);
  return (
    <div className="register-page">
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
      <Nav />
      <div className="">
        <section className="register" style={{ minHeight: "100vh" }}>
          <div className="container">
            <h2 className="register-title">Ro‘yxatdan o‘tish</h2>
            <p className="register-text">
              Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish
              uchun hozir roʻyxatdan oʻting!
            </p>
            <form
              className="register-form"
              method="POST"
              onSubmit={handleSubmit(changeSinging)}
            >
              {search === "?step=2" ? (
                <div className="register-t">
                  <div className="register-box">
                    <label className="register-label">Elektron pochta</label>
                    <span>
                      <img src={emailIcon} alt="" className="register-icon" />
                      <input
                        type="email"
                        className="register-input"
                        placeholder="Ex: abc@example.com"
                        {...register("email")}
                      />
                    </span>
                    {errors?.email && (
                      <p style={{ color: "red" }}>{errors?.email?.message}</p>
                    )}
                  </div>
                  <div className="register-box">
                    <label className="register-label">Parol</label>
                    <span>
                      <img src={blockIcon} alt="" className="register-icon" />
                      <input
                        type="password"
                        className="register-input"
                        placeholder="**********"
                        {...register("password")}
                      />
                      {errors?.password && (
                        <p style={{ color: "red" }}>
                          {errors?.password?.message}
                        </p>
                      )}
                    </span>
                  </div>
                  <div className="register-box">
                    <label className="register-label">Foydalanuvchi nomi</label>
                    <span>
                      <img src={linkIcon} alt="" className="register-icon" />
                      <input
                        type="text"
                        className="register-input"
                        placeholder="Ex. Saul Ramirez"
                        {...register("username")}
                      />
                    </span>
                    {errors?.username && (
                      <p style={{ color: "red" }}>
                        {errors?.username?.message}
                      </p>
                    )}
                  </div>
                  <button className="register-btn" style={{marginTop: "0"}} type="submit">
                    {isLoading ? (
                      <CircularProgress sx={{ color: "white" }} size={20} />
                    ) : (
                      "Qabul qilish"
                    )}
                  </button>
                </div>
              ) : (
                <div className="register-t">
                  <div className="register-box">
                    <label className="register-label">To‘liq ism</label>
                    <span>
                      <img
                        src={avatarIcon}
                        alt="sasas"
                        className="register-icon"
                      />
                      <input
                        type="text"
                        className="register-input"
                        placeholder="Ex. Saul Ramirez"
                        {...register("full_name")}
                      />
                    </span>
                  </div>
                  <div className="register-box">
                    <label className="register-label">Telefon nomer</label>
                    <Controller
                      control={control}
                      name="phone_number"
                      rules={{ required: true }}
                      render={({ field: { ref, ...field } }) => (
                        <PhoneInput
                          inputProps={{
                            name: "phone",
                            required: true,
                            autoFocus: true,
                          }}
                          country="uz"
                          maxLength="17"
                          max="17"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <Link to="/register-page?step=2">
                    <button
                      type="button"
                      className="register-btn"
                      id="registerBtn1"
                      style={{ padding: "8px 50px" }}
                    >
                      Keyingi
                    </button>
                  </Link>
                </div>
              )}
            </form>
            <div className="register-blok">
              <p className="register-info">Accountingiz mavjudmi?</p>
              <Link to="/loginpage" className="register-link">
                Kirish
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterPage;
