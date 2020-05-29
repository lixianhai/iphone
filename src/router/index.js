import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/message',
    children: [
      {
        path: '/message',
        name:  'Message',
        component: () => import('@/views/home'),
        meta: { title: '消息', showHeader: true, showSearch: true, showBackBut: false }
      },
      {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('@/views/contacts'),
        meta: { title: '通讯录', showHeader: true, showSearch: true, showBackBut: false }
      },
      {
        path: '/moments',
        name: 'Moments',
        component: () => import('@/views/moments'),
        meta: { title: '发现', showHeader: true, showSearch: false, showBackBut: false }
      },
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('@/views/personal'),
        meta: { title: '我', showHeader: false, showSearch: false, showBackBut: false }
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
