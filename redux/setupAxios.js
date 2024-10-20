import axios from "axios";
import { API_URL, TOKEN_KEY } from "../src/helpers/constants";

const axiosHttp = axios.create({
  baseURL: API_URL,
});

axiosHttp.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    return {
      ...config,
      headers: {
        ...(token !== null && { Authorization: `Bearer ${token}` }),
        ...config.headers,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosHttp.interceptors.response.use(
  (response) => {
    const url = response.config.url;
    // setLocalStorageToken(token);
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default axiosHttp;
