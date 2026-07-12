import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBrews = async (method = "") => {
  const response = await api.get("/brews/", {
    params: method ? { method } : {},
  });

  return response.data;
};

export const createBrew = async (brewData) => {
  const response = await api.post("/brews/", brewData);
  return response.data;
};

export const updateBrew = async (brewId, brewData) => {
  const response = await api.put(`/brews/${brewId}/`, brewData);
  return response.data;
};

export const deleteBrew = async (brewId) => {
  await api.delete(`/brews/${brewId}/`);
};

export default api;