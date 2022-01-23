import { HEADER_ACCESS_NAME } from "./../constants/common";
import axios from "axios";

export const Instance = axios.create({
  baseURL: "http://localhost:8083/api",
});

Instance.interceptors.request.use(
  (config: any) => {
    const acceptToken = localStorage.getItem(HEADER_ACCESS_NAME);
    if (acceptToken) {
      config.headers.common["Authorization"] = acceptToken;
    }
    return config;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);
