import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Layout/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/actiongroupfrom',
    children: [
      {
        path: 'actiongroupfrom',
        name: 'ActionGroupForm',
        component: () => import(/* webpackChunkName: "ActionGroupForm" */ '@/views/ActionGroupForm/index.vue'),
      },
      {
        path: 'actioncurrentfrom',
        name: 'ActionCurrentForm',
        component: () => import(/* webpackChunkName: "ActionGroupForm" */ '@/views/ActionCurrentForm/index.vue'),
      },
      // {
      //   path: "actiongroupfrom",
      //   name: "ActionGroupForm",
      //   component: () =>
      //     import(/* webpackChunkName: "ActionGroupForm" */ "@/views/ActionGroupForm/index.vue"),
      // },
      {
        path: 'bookdepartmentform',
        name: 'BookDepartmentForm',
        component: () => import(/* webpackChunkName: "ActionGroupForm" */ '@/views/BookDepartmentForm/index.vue'),
      },
      {
        path: 'bookcurrentfrom',
        name: 'BookCurrentFrom',
        component: () => import(/* webpackChunkName: "ActionGroupForm" */ '@/views/BookCurrentFrom/index.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "ActionGroupForm" */ '@/views/About/index.vue'),
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
