import { createApp } from 'vue';
import '@/index.css';
import App from '@/App.vue';
import '@/assets/style.css';
import router from '@/router';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';

axios.defaults.baseURL = '/fire';

createApp(App).use(router, axios, VueAxios, createPinia()).mount('#app');
