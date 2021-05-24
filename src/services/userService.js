import http from "./httpService";

export function getUsers() {
  return http.get("/users");
}
