import { useMutation } from "react-query";
import request from "../requests";

export const useUpdateLink = (linkId) =>
  useMutation("change-link", (data) =>
    request.private
      .put(`/v1/accounts/link-update/${linkId}/`, data)
      .then((res) => res.data)
  );
