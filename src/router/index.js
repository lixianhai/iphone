import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout'

Vue.use(Router);

const constantRoutes = [
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
        path: 'message',
        name: 'Message',
        component: () => import('@/views/message'),
        meta: {
          title: '消息',
          showHeader: true,
          showSearch: true,
          showBackBut: false,
          showNavbar: true,
          index: 1
        }
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/message/list'),
        meta: {
          title: '',
          showHeader: false,
          showSearch: false,
          showBackBut: false,
          showNavbar: false,
          index: 2
        }
      }
    ]
  },
  {
    path: '/addressList',
    component: Layout,
    redirect: '/addressList/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/addressList'),
        meta: {
          title: '通讯录',
          showHeader: true,
          showSearch: true,
          showBackBut: false,
          showNavbar: true,
          index: 1
        }
      },
      {
        path: 'addFriends',
        component: () => import('@/views/addressList/addFriends'),
        meta: {
          title: '添加朋友',
          showHeader: true,
          showSearch: false,
          showBackBut: true,
          showNavbar: false,
          index: 2
        }
      }
    ]
  },
  {
    path: '/find',
    component: Layout,
    redirect: '/find/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/find'),
        meta: {
          title: '发现',
          showHeader: true,
          showSearch: false,
          showBackBut: false,
          showNavbar: true,
          index: 1
        }
      }
    ]
  },
  {
    path: '/me',
    component: Layout,
    redirect: '/me/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/me'),
        meta: {
          title: '我',
          showHeader: false,
          showSearch: false,
          showBackBut: false,
          showNavbar: true,
          index: 1
        }
      },
      {
        path: 'userInfo',
        component: () => import('@/views/me/userInfo'),
        meta: {
          title: '个人信息',
          showHeader: true,
          showSearch: false,
          showBackBut: true,
          showNavbar: false,
          index: 2
        }
      },
      {
        path: 'changeHeadPortrait',
        component: () => import('@/views/me/changeHeadPortrait'),
        meta: {
          title: '修改头像',
          showHeader: true,
          showSearch: false,
          showBackBut: true,
          showNavbar: false,
          index: 3
        }
      },
      {
        path: 'address',
        component: () => import('@/views/me/address'),
        meta: {
          title: '我的地址',
          showHeader: true,
          showSearch: false,
          showBackBut: true,
          showNavbar: false,
          index: 3
        }
      },
      {
        path: 'addAddress',
        component: () => import('@/views/me/addAddress'),
        meta: {
          title: '设置地址',
          showHeader: false,
          showSearch: false,
          showBackBut: false,
          showNavbar: false,
          index: 'top'
        }
      },
      {
        path: 'changeAddress',
        component: () => import('@/views/me/changeAddress'),
        meta: {
          title: '修改地址',
          showHeader: false,
          showSearch: false,
          showBackBut: false,
          showNavbar: false,
          index: 'top'
        }
      }
    ]
  }
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router;
