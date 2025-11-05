import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.MODE === 'development' ? "http://localhost:5001/api" : "/api",
    withCredentials: true, // cookie được lưu trên server
})

export default api;