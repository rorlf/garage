import axios from 'axios';

export const baseUrl = 'http://10.0.2.2:3000/';
const headers = { 'Content-Type': 'application/json' };

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});
