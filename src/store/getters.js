const getters = {
  token: state => state.user.userToken,
  info: state => state.user.userInfo,
  wechatNumber: state => state.user.wechatNumber,
  routerDirection: state => state.app.routerDirection,
}
export default getters