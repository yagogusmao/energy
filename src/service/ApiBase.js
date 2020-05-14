import axios from "axios";
//import { getToken, getAuthenticate } from "./LocalAuth";

const [localhost,server] = [
  "http://192.168.15.46:8080",
  ""
]

const ApiBase = axios.create({
  baseURL: localhost
});

/*
export const authorization = ApiBase.interceptors.request.use(async config => {
  
  if (getAuthenticate()) {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
*/

export default ApiBase;
