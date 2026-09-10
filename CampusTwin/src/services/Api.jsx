import axios from "axios";

// Points at the CampusTwin backend (see the campustwin-backend folder).
// Override by creating a .env file with VITE_API_URL=http://your-url/api
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({ baseURL });

// Attach the JWT (if we have one) to every request automatically.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
