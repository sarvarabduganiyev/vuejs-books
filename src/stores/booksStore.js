import { defineStore } from 'pinia';
import { BookService } from "../services/index.js";

export const useBooksStore = defineStore('books', {
    state: () => ({
        books: [],
    }),
    actions: {
        async fetchBooksOrBook(searchQuery) {
            const response = await BookService.getBook(searchQuery);
            console.log("response",response)
            this.books = response;
        },
    },
});
