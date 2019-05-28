import axios from "axios";

const api = axios.create({
    baseURL: 'https://moitabox-backend.herokuapp.com',
});

export default api;