import axios from "axios";

let requestOptions = {
  headers: { "Content-Type": "application/json" },
};

export const getAstronauts = async () => {
  return axios
    .get("http://localhost:8080/astronauts", requestOptions)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

export const addAstronaut = async (payload) => {
  return axios
    .post("http://localhost:8080/astronauts", payload, requestOptions)
    .catch((e) => console.log(e));
};

export const updateAstronaut = async (id, payload) => {
  return axios
    .put("http://localhost:8080/astronauts/" + id, payload, requestOptions)
    .catch((e) => console.log(e));
};

export const deleteAstronaut = async (id) => {
  return axios
    .delete("http://localhost:8080/astronauts/" + id, requestOptions)
    .catch((e) => console.log(e));
};
