import { useQuery } from "react-query";
import request from "../requests";

export const GetProfilesDetails = (username) =>
  useQuery(["profiles-details", { username }], () =>
    request.public
      .get(`/v1/accounts/profile-detail/${username}/`)
      .then((res) => res.data)
  );
