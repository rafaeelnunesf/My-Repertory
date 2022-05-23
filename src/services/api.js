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
function postMusic(data, token, repertoryId) {
  return axios.post(
    `${BASE_URL}/repertory/${repertoryId}/addMusic`,
    data,
    tokenConfig(token)
  );
}
function deleteMusic(token, repertoryId, musicId) {
  return axios.delete(
    `${BASE_URL}/repertory/${repertoryId}/musics/${musicId}`,
    tokenConfig(token)
  );
}
function updateMusic(token, repertoryId, musicId) {
  return axios.patch(
    `${BASE_URL}/repertory/${repertoryId}/musics/${musicId}`,
    {},
    tokenConfig(token)
  );
}

const api = {
  signIn,
  signUp,
  postRepertory,
  getRepertories,
  getMusics,
  postMusic,
  deleteMusic,
  updateMusic,
};

export default api;
