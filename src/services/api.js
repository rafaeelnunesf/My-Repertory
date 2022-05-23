import axios from "axios";

// const BASE_URL = "https://my-repertory.herokuapp.com";
const BASE_URL = "http://localhost:5000";

function tokenConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function signUp(data) {
  return axios.post(`${BASE_URL}/sign-up`, data);
}

function signIn(data) {
  return axios.post(`${BASE_URL}/sign-in`, data);
}

function postRepertory(data, token) {
  return axios.post(`${BASE_URL}/repertory`, data, tokenConfig(token));
}
function getRepertories(token) {
  return axios.get(`${BASE_URL}/repertory`, tokenConfig(token));
}
function getMusics(token, repertoryId) {
  return axios.get(`${BASE_URL}/repertory/${repertoryId}`, tokenConfig(token));
}

const api = {
  signIn,
  signUp,
  postRepertory,
  getRepertories,
  getMusics,
};

export default api;
