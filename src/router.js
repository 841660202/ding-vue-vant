/**
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 12:44:15
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 16:30:11
 * @Descripttion:
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/tabs',
      name: 'tabs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "tabs" */ './views/tabs.vue'),
    },
    {
      path: '/page1',
      name: 'page1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "page1" */ './views/page1.vue'),
    },
    {
      path: '/page2',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "page2" */ './views/page2.vue'),
    },
    {
      path: '/page3',
      name: 'page3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "page3" */ './views/page3.vue'),
    },
    {
      path: '/page4',
      name: 'page4',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "page4" */ './views/page4.vue'),
    },
  ],
});
