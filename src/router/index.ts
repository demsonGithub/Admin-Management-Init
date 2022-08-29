import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: HelloWorld
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
});

export default router;
