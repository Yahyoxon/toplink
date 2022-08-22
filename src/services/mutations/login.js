import { useMutation } from "react-query";
import request from "../requests";

export const useLogin = () =>
  useMutation("login", (data) =>
    request.public.post("/v1/accounts/login/", data).then((res) => res.data)
  );
