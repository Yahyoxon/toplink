import "./Register.css";
import emailIcon from "../../../src/Assets/Img/emailIcon.png";
import blockIcon from "../../../src/Assets/Img/blockIcon.png";
import linkIcon from "../../../src/Assets/Img/linkIcon.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import React from "react";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

const SignupSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required,
  username: yup.string().required(),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="register" style={{ minHeight: "100vh" }}>
      <div className="container">
        <h2 className="register-title">Ro‘yxatdan o‘tish</h2>
        <p className="register-text">
          Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun
          hozir roʻyxatdan oʻting!
        </p>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="register-box">
            <label className="register-label">Elektron pochta</label>
            <span>
              <img src={emailIcon} alt="" className="register-icon" />
              <input
                {...register("email", {
                  required: "This input is required.",
                })}
                type="email"
                className="register-input"
                placeholder="Ex: abc@example.com"
              />
            </span>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) => {
                console.log("messages email", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="register-error">
                        {message}
                      </p>
                    ))
                  : null;
              }}
            />
            {/* <p className="register-error">siz notogri kiritdingiz</p> */}
          </div>
          <div className="register-box">
            <label className="register-label">Parol</label>
            <span>
              <img src={blockIcon} alt="" className="register-icon" />
              <input
                {...register("password", {
                  required: "This input is required.",
                })}
                type="password"
                className="register-input"
                placeholder="**********"
              />
            </span>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ messages }) => {
                console.log("messages password", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="register-error">
                        {message}
                      </p>
                    ))
                  : null;
              }}
            />
            {/* <p className="register-error">siz notogri kiritdingiz</p> */}
          </div>
          <div className="register-box">
            <label className="register-label">Foydalanuvchi nomi</label>
            <span>
              <img src={linkIcon} alt="" className="register-icon" />
              <input
                {...register("username", {
                  required: "This input is required.",
                })}
                type="text"
                className="register-input"
                placeholder="Ex. Saul Ramirez"
              />
            </span>
            {/* <p className="register-error">siz notogri kiritdingiz</p> */}
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ messages }) => {
                console.log("messages password", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="register-error">
                        {message}
                      </p>
                    ))
                  : null;
              }}
            />
          </div>

          <button
            className="register-btn"
            type="submit"
            style={{ padding: "8px 50px" }}
          >
            {/*
                <Link to="/signuppage" className="register-btn"> */}
            Ro‘yxatdan o‘tish
            {/* </Link> */}
          </button>
        </form>
        <div className="register-blok">
          <p className="register-info">Accountingiz mavjudmi?</p>
          <Link to="/loginpage" className="register-link">
            Kirish
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Register;
