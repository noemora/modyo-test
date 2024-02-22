import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://fed-team.modyo.cloud/api/',
  timeout: 1000,
});

export default httpClient;
