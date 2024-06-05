import axios from 'axios';


const apiConfig = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
    timeout: 160000,
});



apiConfig.interceptors.response.use(
    (response) => {
        return response?.data;
    },
)


export default apiConfig;
