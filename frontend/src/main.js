import { createApp } from 'vue'
import App from './App.vue'
import { VueMaskDirective } from 'v-mask';
import './index.css'

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
    beforeMount: vMaskV2.bind,
    updated: vMaskV2.componentUpdated,
    unmounted: vMaskV2.unbind
};

createApp(App)
.directive('mask', vMaskV3)
    .mount('#app')
