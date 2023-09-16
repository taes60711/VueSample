import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
import HelloWorld from "./components/HelloWorld.vue";
// @ts-ignore
import MainPage from "./components/MainPage/MainPage.vue";

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