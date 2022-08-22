import { useQuery } from "react-query";
import request from "../requests";

export const GetProfilViews = (username) =>
  useQuery(["profile-views", { username }], () =>
    request.public
      .get(`/v1/accounts/profile-views/${username}/`)
      .then((res) => res.data)
  );
