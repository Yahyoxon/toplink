import { useMutation } from "react-query";
import request from "../requests";

export const useLinkDelete = (linkId) =>
  useMutation("link-delete", (data) =>
    request.private
      .delete(`/v1/accounts/link-delete/${linkId}/`, data)
      .then((res) => res.data)
  );
