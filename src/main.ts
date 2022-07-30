import { createApp } from 'vue';
import '@/index.css';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import '@/assets/style.scss';
import router from '@/router';

axios.defaults.baseURL = '/fire';

createApp(App).use(router, axios, VueAxios, createPinia()).mount('#app');
