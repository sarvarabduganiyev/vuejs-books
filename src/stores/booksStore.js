import { defineStore } from 'pinia';
import { BookService } from "../services";

export const useBooksStore = defineStore('books', {
    state: () => ({
        books: [],
        loading: false, // Add a loading state
    }),
    actions: {
        async findBooks(searchQuery) {
            this.loading = true; // Set loading to true when the request starts
            try {
                const response = await BookService.getBook(searchQuery);
                this.books = response;
            } catch (error) {
                console.error('Failed to fetch books', error);
            } finally {
                this.loading = false; // Set loading to false when the request completes
            }
        },
    },
});
