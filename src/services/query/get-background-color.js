import { useQuery } from "react-query";
import request from "../requests";

export const GetBackgroundColor = (username) =>
    useQuery(["background-color",{username}],()=>
        request.public
            .get(`/v1/accounts/change-background-color/${username}/`)
            .then((res)=> res.data)
);

export const PutBackgroundColor = (username) =>
    useQuery(["change-background-color",{username}],()=>
        request.private
            .put(`/v1/accounts/change-background-color/${username}/`)
            .then((res)=> res.data)
);