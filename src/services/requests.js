import axios from "axios";

const request = {
  private: axios.create({ baseURL: process.env.REACT_APP_API_URL }),
  public: axios.create({ baseURL: process.env.REACT_APP_API_URL }),
};

request.private.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

request.private.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export default request;
