import { defineStore } from 'pinia';
import { storageService } from "../lib/utils";
import {useRouter} from "vue-router";
import {createRouter as $router} from "vue-router/dist/vue-router.esm-browser.js";

export const useAuthStore = defineStore('auth', {

    state: () => ({
        authenticated: storageService.getAccessToken() || null,
    }),
    actions: {
        setUser(token) {
            this.authenticated = token;
            storageService.setAccessToken(token);

        },
        removeUser() {
            this.authenticated = null;
            storageService.removeAccessToken();
        }
    }
});
