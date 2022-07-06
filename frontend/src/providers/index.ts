import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';

export const Api = axios.create({
  baseURL: BASE_URL
});

export const AxiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-type': 'Application/json' }
});
