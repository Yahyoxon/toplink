import { useQuery } from "react-query";
import request from "../requests";

export const GetLinkViews = (username) =>
  useQuery(["link-views", { username }], () =>
    request.public
      .get(`/v1/accounts/link-views/${username}/`)
      .then((res) => res.data)
  );
