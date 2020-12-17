import http from "./httpService.js";
import config from "../config.json";

let apiEndPoint = config.apiEndPoint + "/user";

export function register(user) {
  // console.log(config.apiEndPoint);
  return http.post(apiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
