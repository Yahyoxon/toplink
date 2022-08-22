import { useMutation } from "react-query";
import request from "../requests";

export const useChangePassword = () =>
  useMutation("change-password", (data) =>
    request.private
      .post(`/v1/accounts/account-password-change/`, data)
      .then((res) => res.data)
  );
