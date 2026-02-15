import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue"
import Profile from "./components/Profile.vue"
import Login from "./components/Login.vue";

const routes = [
    { name: "home", path: '/', component: Home},
    { name: "login", path: '/login', component: Login},
    { name: "profile", path: '/profile', component: Profile},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;