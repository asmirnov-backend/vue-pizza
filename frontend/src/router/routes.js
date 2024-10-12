export default [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    children: [],
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/cart",
    name: "CartView",
    component: () => import("../views/CartView.vue"),
    children: [],
    meta: { layout: "AppLayoutDefault" },
  },
];
