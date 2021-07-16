import http from "../http-common";

const getAll = () => {
  return http.get("/consultarmovies");
};

const get = id => {
  return http.get(`/consultarmovie/${id}`);
};

const create = data => {
  return http.post("/createmovie", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = nombre => {
  return http.get(`/tutorials?nombre=${nombre}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;
