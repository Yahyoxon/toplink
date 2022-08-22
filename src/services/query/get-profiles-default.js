import { useQuery } from "react-query";
import request from "../requests";

export const GetProfilesDefault = (userId) =>
  useQuery(["profiles", { userId }], () =>
    request.private
      .get(`/v1/accounts/profile-list-user/${userId}/`)
      .then((res) => res.data)
  );
