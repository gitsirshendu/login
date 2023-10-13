import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export default AxiosInstance;