import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './style.css';
import {createPinia} from "pinia";
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
const pinia = createPinia();


const app = createApp(App);
app.use(VueToast)
app.use(router);
app.use(pinia)
app.mount('#app');

