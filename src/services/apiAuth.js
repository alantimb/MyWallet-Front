import axios from "axios";
import env from "react-dotenv";

function login(body) {
  const promise = axios.post(`${env.REACT_APP_API_URL}/login`, body);
  return promise;
}

function signUp(body) {
  const promise = axios.post(`${env.REACT_APP_API_URL}/login`, body);
  return promise;
}

const apiAuth = { login, signUp };

export default apiAuth;
