import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.mode === "developement" ? "http://localhost:3000/api": "/api",
  withCredentials: true, // allows you to send cookies to the sever
});


export default axiosInstance;