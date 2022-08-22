import { useQuery } from "react-query";
import request from "../requests";

export const GetAccount = (userId) =>
  useQuery(["account", { userId }], () =>
    request.private
      .get(`/v1/accounts/account-update/${userId}/`)
      .then((res) => res.data)
);
