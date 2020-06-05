import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import app from './modules/app'
import message from './modules/message'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    message
  },
  getters,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})

export default store

// export default new Vuex.Store({
//   state: {
//     USER_TOKEN: false,  // 密匙
//     USER_INFO:[], // 用户信息
//     ROUTER_DIRECTION: ''  // 路由滑动方向
//   },
//   mutations: {
//     SET_TOKEN(state, token) {
//       this.state.USER_TOKEN = token
//       console.log(token)
//     },
//     SET_USERINFO(state, userInfo) {
//       console.log(userInfo)
//       this.state.USER_INFO.push(userInfo.userName)
//       this.state.USER_INFO.push(userInfo.passWord)
//     },
//     SET_ROUTER_DIRECTION(state, direction) {
//       this.state.ROUTER_DIRECTION = direction
//     }
//   },
//   actions: {
//     LoginByUsername({ commit }, userInfo) {
//       return new Promise((resolve, reject) => {
//         Cookies.set('user_info', userInfo)
//         Cookies.set('user_token', true)
//         commit('SET_TOKEN', true)
//         commit('SET_USERINFO', userInfo)
//         resolve()
//       })
//     }
//   },
//   modules: {
//   }
// })
