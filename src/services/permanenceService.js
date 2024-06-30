import axios from "axios";
const baseUrl = "http://localhost:3001/permanences";

const getAllPerm = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const createPerm = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const updatePerm = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getAllPerm,
  createPerm,
  updatePerm,
};
