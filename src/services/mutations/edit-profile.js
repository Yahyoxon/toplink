import { useMutation } from "react-query";
import request from "../requests";

export const useEditProfile = (username) =>
  useMutation("editprofile", (data) =>
    request.private
      .put(`/v1/accounts/profile-update/${username}/`, data)
      .then((res) => res.data)
  );
