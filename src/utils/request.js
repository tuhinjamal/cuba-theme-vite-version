import { getToken } from "@/utils/auth";
import axios from "axios";

const service = axios.create({
  // baseURL: "https://api-acr.inflack.net/",
  baseURL: "https://api2.inflack.net/",
  // baseURL: "http://192.168.0.226:8000/",
});

service.interceptors.request.use(
  (config) => {
    (config.headers["Token"] = getToken()),
      (config.headers["Access-Control-Allow-Headers"] = "*"),
      (config.headers["Access-Control-Allow-Origin"] = "*"),
      (config.headers["Accept"] = "application/json"),
      (config.headers["Content-Type"] = "application/json"),
      (config.headers["Authorization"] = "Bearer " + getToken());

    return config;
  },
  (error) => {
    // do something with request error
    console.log("error", error); // for debug
    return Promise.reject(error);
  }
);

export default service;
