import { defineStore } from 'pinia';
import { BookService } from "../services";

export const useBooksStore = defineStore('books', {
    state: () => ({
        books: [],
        loading: false,
    }),
    actions: {
        async findBooks(searchQuery) {
            this.loading = true;
            try {
                const response = await BookService.getBook(searchQuery);
                this.books = response;
            } catch (error) {
                console.error('Failed to fetch books', error);
            } finally {
                this.loading = false;
            }
        },
    },
});
