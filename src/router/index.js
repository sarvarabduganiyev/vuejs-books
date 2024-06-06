import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import BookDetail from '../views/BookDetail.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import {useAuthStore} from "../stores/authStore.js";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/book-detail/:id',
        name: 'BookDetail',
        component: BookDetail,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const authStore = useAuthStore();
        if (authStore.authenticated) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

export default router
