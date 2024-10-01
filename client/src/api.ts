// src/api.ts
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Add interceptors if needed for attaching tokens

export default API;
