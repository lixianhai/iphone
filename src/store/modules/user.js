import Cookies from 'js-cookie';



/**
 * wechatNumber 微信号
 * userHeadPortrait 用户头像
 */

const state = {
  userToken: false,  // 密匙
  userInfo:[], // 用户信息
  wechatNumber: '',
  userHeadPortrait: ''
}

const mutations = {
  setToken(state, token) {
    state.userToken = token
    console.log(token)
  },
  setUserInfo(state, userInfo) {
    state.userInfo.push(userInfo.userName)
    state.userInfo.push(userInfo.passWord)
  },
  setWechatNumber(state, username) {
    state.wechatNumber = username
  },
  setUserHeadPortraitPath(state, filePath) {
    state.userHeadPortrait = filePath
  }
}

const actions = {
  LoginByUsername({ commit }, userInfo) {
    const { userName } = userInfo
    return new Promise(( resolve ) => {
      Cookies.set('user_info', userInfo)
      Cookies.set('user_token', true)
      commit('setToken', true)
      commit('setUserInfo', userInfo)
      commit('setWechatNumber', userName)
      localStorage.setItem('wechatNumber', userName)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}