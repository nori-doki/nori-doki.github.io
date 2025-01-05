import { Routes as routes } from './routesList'
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    routes,
    history : createWebHistory()
})
export default router