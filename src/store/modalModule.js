export const modalModule = {
  state: () => ({
    modalVisibleAdmin: false,
    modalVisible: false,

    deleteElement: null,
  }),

  getters: {
    
  },

  mutations: {
    setModalVisibleAdmin(state, modalVisibleAdmin) {
      state.modalVisibleAdmin = modalVisibleAdmin;
    },
    setModalVisible(state, modalVisible) {
      state.modalVisible = modalVisible;
    },

    setDeleteElement(state, deleteElement) {
      state.deleteElement = deleteElement;
    },
  },

  actions: {
    
  },
  namespaced: true
}