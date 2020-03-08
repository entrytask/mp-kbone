export default {
  FAKE_MUTATION(state, input) {
    state.input = input
  },
  LOGIN_MUTATION(state,username) {
    window.localStorage.setItem('username',username)
    state.username = username
  }
}
