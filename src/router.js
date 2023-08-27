import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from "./Components/HelloWorld.vue";
import MainPage from "./Components/MainPage/MainPage.vue";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router