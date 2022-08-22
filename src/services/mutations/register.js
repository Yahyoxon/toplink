import { useMutation } from "react-query";
import request from "../requests";

export const useRegister = () =>
  useMutation("register", (data) =>
    request.public.post("/v1/accounts/register/", data).then((res) => res.data)
  );
