import axios from "axios";
import { BASE_URL } from "./constants";

const axiosInsance = axios.create({
  baseUrl: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInsance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInsance;
