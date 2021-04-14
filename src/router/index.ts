import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import DashboardList from "../views/DashboardList.vue";
import GPS from "../views/GPS.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboardList",
    name: "DashboardList",
    component: DashboardList,
  },{
    path: "/gps",
    name: "GPS",
    component: GPS,
  }
];

//let current: any = "/login";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router;
