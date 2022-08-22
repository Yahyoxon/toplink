import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CircularProgress, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useLogin } from "../../services/mutations/login";
import emailIcon from "../../../src/Assets/Img/emailIcon.png";
import blockIcon from "../../../src/Assets/Img/blockIcon.png";
import "./Login.css";
import { get } from "lodash";
import { GetProfiles } from "../../services/query/get-profiles";
import { useEffect, useState } from "react";

const SignupSchema = yup.object({
  email: yup
    .string()
    .required("To'ldirish majburiy!")
    .email("Email to'g'ri kiritilmadi!"),
  password: yup.string().required("To'ldirish majburiy!"),
});

const Login = () => {
  const { mutate, isLoading } = useLogin();
  const [userId, setUserId] = useState();
  const { pathname } = useLocation();
  const { data } = GetProfiles(userId);
  const history = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (response) => {
        localStorage.setItem("token", response?.access);
        localStorage.setItem("id", response?.user_id);
        setUserId(response?.user_id);
      },
      onError: () => {
        toast.error("Email yoki parol xato kiritildi!", {
          position: "top-right",
        });
      },
    });
  };

  useEffect(() => {
    if (get(data, "length") > 0 && pathname === "/loginpage") {
      history(`/${get(data, "[0].username")}`);
      window.location.reload();
    }
  }, [data, history, pathname]);

  return (
    <>
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
      {!isLoading ? (
        <section className="register" style={{ minHeight: "100vh" }}>
          <div className="container">
            <h2 className="register-title">Kirish</h2>
            <p className="register-text">
              Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish
              uchun hozir tizimga kiring!
            </p>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="register-box">
                <label className="register-label">Elektron pochta</label>
                <span>
                  <img src={emailIcon} alt="" className="register-icon" />
                  <input
                    type="email"
                    className="register-input"
                    placeholder="Ex: abc@example.com"
                    required
                    {...register("email")}
                  />
                </span>
              </div>
              {errors?.email && (
                <p style={{ color: "red" }}>{errors?.email?.message}</p>
              )}
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
                </span>
              </div>
              {errors?.password && (
                <p style={{ color: "red" }}>{errors?.password?.message}</p>
              )}
              <Link to="/forgetpage" className="register-found">
                Parolni unutdingizmi?
              </Link>
              <button type="submit" className="register-btn">
                Kirish
              </button>
            </form>
            <div className="register-blok">
              <p className="register-info">Accountingiz mavjud emasmi?</p>
              <Link to="/register-page" className="register-link">
                Ro‘yxatdan o‘tish
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};
export default Login;
