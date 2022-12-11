export const authModule = {
  state: () => ({
    user: null,
  }),

  getters: {
    isAuth(state) {
      return state.user ? true : false 
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },

  actions: {
    
  },
  namespaced: true
}