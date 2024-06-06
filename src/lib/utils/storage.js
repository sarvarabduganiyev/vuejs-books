const AUTH_USER = "user";

class StorageService {
    setItem(key, value) {
        window.localStorage.setItem(key, value);
    }

    getItem(key) {
        return window.localStorage.getItem(key);
    }

    removeItem(key) {
        window.localStorage.removeItem(key);
    }

    getAccessToken = () => this.getItem(AUTH_USER);
    removeAccessToken = () => this.removeItem(AUTH_USER);
    setAccessToken = (token) => this.setItem(AUTH_USER, token);
}

export const storageService = new StorageService();
