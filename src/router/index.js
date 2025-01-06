import { Routes as routes } from './routesList'
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    routes,
    history : createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})
export default router