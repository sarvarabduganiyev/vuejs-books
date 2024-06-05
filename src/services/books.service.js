import apiConfig from "./base-axios.js";

export const BookService =  {
    getBook: (params = {}) => apiConfig.get("/volumes", {params}),
}