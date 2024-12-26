import axios from "axios";
import { API_URL, TOKEN_KEY } from "./Constants";
import Logger from "./Logger";

const axiosHttp = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Set a timeout for all requests to avoid indefinite hangs
});

// Request interceptor
axiosHttp.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    Logger.debug("Request config:", config);
    return config;
  },
  (error) => {
    Logger.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosHttp.interceptors.response.use(
  (response) => {
    Logger.info("Response received:", {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    if (error.response) {
      Logger.warn("Response error:", {
        url: error.config?.url,
        status: error.response.status,
        data: error.response.data,
      });

      if (error.response.status === 401) {
        Logger.info("Unauthorized: Clearing storage and redirecting to login.");
        localStorage.clear();
        window.location.href = "/auth/login";
      }
    } else {
      Logger.error("Network error or no response received:", error);
    }

    return Promise.reject(error);
  }
);

export default axiosHttp;
