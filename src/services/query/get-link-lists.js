import { useQuery } from "react-query";
import request from "../requests";

export const GetLinkLists = (username, isChanged) =>
  useQuery(["link-lists", username, isChanged], () =>
    request.public
      .get(`/v1/accounts/link-list/${username}/`)
      .then((res) => res.data)
  );
