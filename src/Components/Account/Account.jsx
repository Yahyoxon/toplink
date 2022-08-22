import "./Account.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { GetAccount } from "../../services/query/get-account";
import { Box, CircularProgress } from "@mui/material";
import { useEditAccount } from "../../services/mutations/edit-account";
import { ToastContainer, toast } from "react-toastify";
import { useChangePassword } from "../../services/mutations/change-password";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Account = () => {
  const userId = localStorage.getItem("id");
  const { data, isFetching } = GetAccount(userId);
  const { mutate, isLoading } = useEditAccount(userId);
  const changePassword = useChangePassword();

  const validationSchema = yup.object({
    new_password1: yup
      .string()
      .required("To'ldirish majburiy!")
      .min(4, "Parol 4 ta belgidan kam bo'lmasligi kerak!")
      .max(12, "Parol 12 ta belgidan ko'p bo'lmasligi kerak!"),
    new_password2: yup
      .string()
      .required("To'ldirish majburiy!")
      .min(4, "Parol 4 ta belgidan kam bo'lmasligi kerak!")
      .max(12, "Parol 12 ta belgidan ko'p bo'lmasligi kerak!"),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      full_name: data?.full_name,
      email: data?.email,
      phone_number: data?.phone_number,
    },
  });

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  const onSubmit = async (values) => {
    const data = {
      full_name: values?.full_name,
      email: values?.email,
      phone_number: values?.phone_number,
    };
    mutate(data, {
      onSuccess: () => {
        toast.success("Account muvaffaqiyatli tahrirlandi!", {
          position: "top-right",
        });
      },
    });
  };
  const onSubmitPasswordChange = async (values) => {
    const data = {
      new_password1: values?.new_password1,
      new_password2: values?.new_password2,
    };
    changePassword.mutate(data, {
      onSuccess: () => {
        toast.success("Parol yangilandi!", {
          position: "top-right",
        });
      },
      onError: (res) => {
        toast.error(res?.response?.data?.message, {
          position: "top-right",
        });
      },
    });
  };
  

  const { username } = useParams();
  return (
    <section className="account">
      <div className="account-first">
        <div className="account-top">
          <Link to={`/${username}/account`} className="account-btn">
            Account
          </Link>
          <Link to={`/${username}/accountShartnoma`} className="account-btn">
            Shartnoma
          </Link>
        </div>
        {isFetching ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <div className="account-footer">
            <div className="account-headers">Foydalanuvchi ma'lumotlari</div>
            <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="account-span">
                <label>To’liq Ism</label>
                <input
                  className="account-input"
                  type="text"
                  required
                  placeholder="Husanboy Tursunov"
                  {...register("full_name")}
                />
              </div>
              <div className="account-span">
                <label>Elektron pochta</label>
                <input
                  className="account-input"
                  type="email"
                  disabled
                  style={{ backgroundColor: "#f8f8f8" }}
                  required
                  placeholder="Elektron pochta"
                  {...register("email")}
                />
              </div>
              <div className="account-span">
                <label>Telefon nomer</label>
                <Controller
                  control={control}
                  name="phone_number"
                  render={({ field }) => (
                    <PhoneInput
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                      {...field}
                      country="uz"
                      maxLength="17"
                      max="17"
                    />
                  )}
                />
              </div>
              <button className="account-button">
                {isLoading ? (
                  <CircularProgress sx={{ color: "white" }} size={20} />
                ) : (
                  "Saqlash"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="account-first">
        <div className="account-footer">
          <div className="account-headers">Parolni o’zgartirish</div>
          <form
            className="account-form"
            onSubmit={handleSubmit(onSubmitPasswordChange)}
          >
            <div className="account-span">
              <label>Yangi parol</label>
              <input
                className="account-input"
                type="password"
                {...register("new_password1")}
              />
              {errors?.new_password1 && (
                <p style={{ color: "red" }}>{errors?.new_password1?.message}</p>
              )}
            </div>
            <div className="account-span">
              <label>Parolni qayta kirirting</label>
              <input
                className="account-input"
                type="password"
                {...register("new_password2")}
              />
              {errors?.new_password2 && (
                <p style={{ color: "red" }}>{errors?.new_password2?.message}</p>
              )}
            </div>

            <button className="account-button" type="submit">
              {changePassword.isLoading ? (
                <CircularProgress sx={{ color: "white" }} size={20} />
              ) : (
                "Saqlash"
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Account;
