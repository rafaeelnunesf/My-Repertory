import axios from "axios";

// const BASE_URL = "https://my-repertory.herokuapp.com";
const BASE_URL = "http://localhost:5000";

function signUp(data) {
  return axios.post(`${BASE_URL}/sign-up`, data);
}

function signIn(data) {
  return axios.post(`${BASE_URL}/sign-in`, data);
}

const api = {
  signIn,
  signUp,
};

export default api;
