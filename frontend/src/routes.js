import { createRouter, createWebHashHistory } from 'vue-router';

// componentes
import RegisterForm from './components/forms/RegisterForm.vue';
import UpdateForm from './components/forms/UpdateForm.vue';
import IndexTable from './components/IndexTable.vue';

const routes = [
    { path: '/', component: RegisterForm },
    { path: '/create', component: RegisterForm },
    { path: '/update/:id', component: UpdateForm },
    { path: '/index', component: IndexTable },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;