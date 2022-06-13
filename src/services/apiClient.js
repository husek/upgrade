import axios from 'axios';

// baseURL can be provided via .env in the future;
const baseURL = 'http://localhost:3001/api';

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json"
  }
});
