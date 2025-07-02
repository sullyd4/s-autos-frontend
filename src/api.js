// client/src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://ss-autos-api.onrender.com'
});

export default API;