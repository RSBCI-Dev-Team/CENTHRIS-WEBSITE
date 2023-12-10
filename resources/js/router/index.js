import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/pages/Landing.vue";
import BookADemo from "@/pages/BookADemo.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Landing",
            component: () => import("../pages/Landing.vue"),
        },
        {
            path: "/book-a-demo",
            name: "BookADemo",
            component: () => import("../pages/BookADemo.vue"),
        },


    ],
});


export default router;
