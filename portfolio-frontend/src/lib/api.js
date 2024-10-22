import axios from "axios";

const api = axios.create({
    baseURL: 'https://portfolio-backend-gamma-drab.vercel.app',
    withCredentials: true,
    crossdomain: true,
});

export default api;