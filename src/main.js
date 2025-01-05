import { createApp } from 'vue';

import './reset.css';
import './style.scss';
import 'primeicons/primeicons.css';

import App from './App.vue';
import router from "@/router";

import PrimeVue from 'primevue/config';
import Button from "primevue/button";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component('Button', Button);
app.mount('#app');