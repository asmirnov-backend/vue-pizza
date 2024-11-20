import { isAuthenticated } from "../middlewares/isAuthenticated";

export default [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    children: [],
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
    children: [],
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    children: [],
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/success",
    name: "success",
    component: () => import("../views/SuccessView.vue"),
    children: [],
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserView.vue"),
    meta: { layout: "AppLayoutSidebar", middlewares: [isAuthenticated] },
    children: [
      {
        path: "profile",
        name: "profile",
        component: () => import("../views/ProfileView.vue"),
        meta: { layout: "AppLayoutSidebar" },
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("../views/OrdersView.vue"),
        meta: { layout: "AppLayoutSidebar" },
      },
    ],
  },
];
