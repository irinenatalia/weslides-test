import http from "../http-common";

const getAll = () => {
  return http.get("/contacts");
};
const create = data => {
  return http.post("/contact", data);
};
const Service = {
  getAll,
  create
};

export default Service;
