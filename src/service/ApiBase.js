import axios from "axios";
import { getToken, getAuthenticate } from "./LocalAuth";

const [localhost, server] = [
  "http://localhost:8080",
  "https://energyappie.herokuapp.com"
]

const ApiBase = axios.create({
  baseURL: server
});


export const authorization = ApiBase.interceptors.request.use(async config => {
  if (getAuthenticate()) {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default ApiBase;
