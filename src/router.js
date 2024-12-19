import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./components/Homepage.vue";
import About from "./components/About.vue";
import experience from "./components/experience.vue";
import Designs from "./components/designs.vue";
import Contact from "./components/contact.vue";




const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Homepage,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/experience',
        name: 'experience',
        component: experience,
    },
    {
        path: '/designs',
        name: 'designs',
        component: Designs,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,

    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes})

export default router