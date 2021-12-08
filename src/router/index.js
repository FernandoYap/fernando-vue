import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
{
    path : "/",
    name : "home", 
    component: () => import('@/components/HelloWorld.vue')
},
    {
    path : "/login",
    name : "login", 
    component: () => import('@/view/login/main.vue')
},
{
    path : "/register",
    name : "register", 
    component: () => import('@/view/register/main.vue')
},
{
    path : "/dashboard",
    name : "dashboard", 
    component: () => import('@/view/dashboard/main.vue')
},
{
    path : "/profil",
    name : "profil", 
    component: () => import('@/view/profil/main.vue')
},
{
    path : "/about",
    name : "about", 
    component: () => import('@/view/about/main.vue')
},
{
    path : "/users",
    name : "users", 
    component: () => import('@/view/users/main.vue')
},
{
    path : "/users/:id",
    name : "detailuser", 
    component: () => import('@/view/users/DetailUser.vue')
},
{
    path : "/create-user",
    name : "createuser", 
    component: () => import('@/view/users/FormCreate.vue')
},
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
