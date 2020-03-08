export default {
  FAKE_ACTION({ commit }, input) {
    setTimeout(() => {
      commit('FAKE_MUTATION', input)
    }, 500)
  },
  LOGIN({ commit }, username) {
    commit('LOGIN_MUTATION', username)
  }
}
