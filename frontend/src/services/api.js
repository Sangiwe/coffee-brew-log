import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBrews = async () => {
  const response = await api.get("/brews/");
  return response.data;
};

export const createBrew = async (brewData) => {
  const response = await api.post("/brews/", brewData);
  return response.data;
};

export default api;