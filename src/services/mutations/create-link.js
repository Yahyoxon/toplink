import { useMutation } from "react-query";
import request from "../requests";

export const useLinkCreate = () =>
  useMutation("link-create", (data) =>
    request.private
      .post("/v1/accounts/link-create/", data)
      .then((res) => res.data)
  );
