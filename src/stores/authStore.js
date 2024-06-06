import { defineStore } from 'pinia';
import { storageService } from "../lib/utils";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: storageService.getAccessToken() || null,
    }),
    actions: {
        setUser(token) {
            this.authenticated = token;
            storageService.setAccessToken(token);
        },
    }
});
