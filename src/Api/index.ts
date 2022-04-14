import axios from 'axios';
const token = localStorage.getItem('token');

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  timeout: 10000,
  headers: { Authorization: 'Bearer ' + token },
});
