import axios from 'axios';
const token = localStorage.getItem('token');

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  headers: { Authorization: 'Bearer ' + token },
});
