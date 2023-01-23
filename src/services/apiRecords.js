import axios from "axios";
import env from "react-dotenv";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getRecords(token) {
  const promise = axios.get(`${env.REACT_APP_API_URL}/records`, createConfig(token));
  return promise;
}

function createRecord(token, body) {
  const promise = axios.post(
    `${env.REACT_APP_API_URL}/records`,
    body,
    createConfig(token)
  );
  return promise;
}

const apiRecords = { getRecords, createRecord };
export default apiRecords;
