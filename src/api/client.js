import axios from "axios";
const client = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://devtest-5y77.onrender.com",
});

export default client;
