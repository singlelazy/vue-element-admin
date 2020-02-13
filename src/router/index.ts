import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/pages/dashboard/index.vue')
            }
        ]
    }
]

export default new VueRouter({
    routes
})

