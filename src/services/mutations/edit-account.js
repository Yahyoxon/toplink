import { useMutation } from "react-query";
import request from "../requests";

export const useEditAccount = (username) =>
  useMutation("edit-account", (data) =>
    request.private
      .put(`/v1/accounts/account-update/${username}/`, data)
      .then((res) => res.data)
  );
