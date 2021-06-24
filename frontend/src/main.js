import './index.css'
import { createApp } from 'vue'
import router from './routes';
import App from './App.vue'
import { VueMaskDirective } from 'v-mask';
import store from './store/index';


const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
    beforeMount: vMaskV2.bind,
    updated: vMaskV2.componentUpdated,
    unmounted: vMaskV2.unbind
};

const shouldUseAPI = true;

const app = createApp(App).directive('mask', vMaskV3);
    
app.config.globalProperties.shouldUseAPI = shouldUseAPI;
    
app.use(router)
    .use(store)
    .mount('#app');
