import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { VueMaskDirective } from 'v-mask';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});


const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
    beforeMount: vMaskV2.bind,
    updated: vMaskV2.componentUpdated,
    unmounted: vMaskV2.unbind
};

const app = createApp(App).directive('mask', vMaskV3);
    
app.config.globalProperties.axios = axiosInstance;
    
app.mount('#app');
