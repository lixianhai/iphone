import that from '../main.js'

export function setRouterdirection (direction) {
  that.$store.commit('SET_ROUTER_DIRECTION', direction)
}