import { createRouter, createWebHistory } from "vue-router";
import MainDashboard from "../views/MainDashboard.vue";

const routes = [
    {
        path: "/dashboard",
        name: "db.index",
        component: MainDashboard,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
