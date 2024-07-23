import axios from "axios";

export default axios.create({
  baseURL: "https://nodejs-mysql-api-17bi.onrender.com/api/v1/",
  headers: {
    "Content-type": "application/json"
  }
});
