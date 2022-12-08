export const authModule = {
  state: () => ({
    isAuth: false, // это computed свойство если нет юзера
    user: {}, // здесь null
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