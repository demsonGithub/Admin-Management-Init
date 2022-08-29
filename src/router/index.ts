import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/main',
        name: 'main',
        component: HelloWorld
    },
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
});

export default router;
