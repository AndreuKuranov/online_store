// import { AuthAPI } from "@/api/AuthAPI";
// import { DefaultAPIInstance } from "@/api";

// export const authModule = {
//   state: () => ({
//     credentials: {
//       token: localStorage.getItem('token') || null,
//       userRole: localStorage.getItem('userRole') || null,
//     }
//   }),

//   getters: {
//     getUserRole: (state) => state.credentials.userRole,
//   },

//   mutations: {
//     setToken(state, token) {
//       state.credentials.token = token;
//       localStorage.setItem('token', token);
//     },

//     setUserRole(state, userRole) {
//       state.credentials.userRole = userRole;
//       localStorage.setItem('userRole', userRole);
//     },

//     deleteToken(state) {
//       state.credentials.token = null;
//       localStorage.removeItem('token');
//     },

//     deleteUserRole(state) {
//       state.credentials.userRole = null;
//       localStorage.removeItem('userRole');
//     },
//   },

//   actions: {
//     onLogin({ commit }, { login, password }) {
//       AuthAPI.login(login, password).then((res) => {
//         commit('setToken', res.token);
//         commit('setUserRole', res.userRole);
//         DefaultAPIInstance.defaults.headers['authorization'] = `Bearer ${res.token}`;
//       })
//     },

//     onLogout({ commit }) {
//       commit('deleteToken');
//       commit('deleteUserRole');
//       delete DefaultAPIInstance.defaults.headers['authorization'];
//     }
//   },
//   namespaced: true
// }

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