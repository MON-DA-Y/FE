import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:80/api",
  headers: { "Content-Type": "application/json" },
});
