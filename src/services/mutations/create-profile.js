import { useMutation } from "react-query";
import request from "../requests";

export const useCreateProfile = () =>
  useMutation("editprofile", (data) =>
    request.private
      .post("/v1/accounts/second-profile-create/", data)
      .then((res) => res.data)
  );
