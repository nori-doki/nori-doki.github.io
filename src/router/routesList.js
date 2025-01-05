import Home from '@/views/pages/Home.vue';

export const Routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/resume",
        name: "resume",
        component: () => import('@/views/pages/Resume.vue'),
    },
    {
        path: "/projects",
        name: "projects",
        component: () => import('@/views/pages/Projects.vue'),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import('@/views/pages/Contact.vue'),
    }
];