import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos?_limit=10",
    timeout: 5000,
});

export default api;