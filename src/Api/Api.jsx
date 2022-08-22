import axios from "axios";

export default axios.create({
  baseURL: "https://api.toplink.uz/api/v1/accounts/"
});