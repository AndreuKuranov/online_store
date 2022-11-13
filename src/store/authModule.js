export const authModule = {
  state: () => ({
    isAuth: false,
    user: {},
  }),

  getters: {

  },

  mutations: {
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth
    },
    setUser(state, user) {
      state.user = user
    },
  },

  actions: {
    
  },
  namespaced: true
}