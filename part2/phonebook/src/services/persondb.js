import axios from "axios";

const baseURL = "http://localhost:3001/persons"; // points to db.json

const getAll = () => {
  return axios.get(baseURL).then(res => res.data);
};

const addPerson = newPerson => {
  return axios.post(baseURL, newPerson).then(res => res.data);
};

const updatePerson = (id, newPerson) => {
  return axios.put(`${baseURL}/${id}`, newPerson).then(res => res.data);
};

const deletePerson = id => {
  return axios.delete(`${baseURL}/${id}`).then(res => {
    return res.statusText;
  });
};

export default { getAll, addPerson, updatePerson, deletePerson };
