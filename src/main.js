import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import Cookies from 'js-cookie';
import 'vant/lib/index.css';
import 'lib-flexible';

Vue.use(Vant);

Vue.config.productionTip = false

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, form, next) => {
	
	let userToken = Cookies.get('user_token')
	let userInfo = Cookies.get('user_info')

	if (userToken) {
		if (to.path === '/login') {
      next();
		} else {
			if (userInfo.length === 0) {
        let user_info = Cookies.get('user_info')
				store.commit('setUserInfo', user_info)
				next('/')
      } else {
        next()
      }
		}
	} else {
		if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
    }
	}
})

const vue = new Vue({
  router,
	store,
  render: h => h(App)
}).$mount('#app')

export default vue
