import { useQuery } from "react-query";
import request from "../requests";

export const GetProfiles = (userId, isChangedProfile) =>
  useQuery(["profiles", userId, isChangedProfile], () =>
    request.private
      .get(`/v1/accounts/profile-list/${userId}/`)
      .then((res) => res.data)
  );
