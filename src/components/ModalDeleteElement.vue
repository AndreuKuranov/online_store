<template>
  <my-modal 
    :stateModal="modalVisibleAdmin"
    @setStateModal="closeModal"
  >
    <DeleteElement
      :title="deleteElement.title"
      :id="deleteElement.id"
      @deleteElement="deleteElem"
      @closeModal="closeModal"
    />
  </my-modal>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import DeleteElement from '@/components/admin/DeleteElement.vue';

export default {
  components: {
    DeleteElement,
  },
  computed: {
    ...mapState({
      modalVisibleAdmin: state => state.modal.modalVisibleAdmin,
      deleteElement: state => state.modal.deleteElement,
    }),
  },
  methods: {
    ...mapMutations({
      setModalVisibleAdmin: 'modal/setModalVisibleAdmin',
      setDeleteElement: 'modal/setDeleteElement',
    }),
    ...mapActions({
      deleteTypesAction: 'shop/deleteTypesAction',
      deleteBrandsAction: 'shop/deleteBrandsAction',
      deleteDevicesAction: 'shop/deleteDevicesAction',
    }),

    deleteElem() {
      switch(this.deleteElement?.name) {
        case 'type':
          this.deleteTypesAction(this.deleteElement.id);
          break;

        case 'brand': 
          this.deleteBrandsAction(this.deleteElement.id);
          break;

        case 'product': 
          this.deleteDevicesAction(this.deleteElement.id);
          break;
      }

      this.setModalVisibleAdmin(false);
    },

    closeModal(val) {
      this.setModalVisibleAdmin(val);
      this.setDeleteElement(null);
    }
  }
}
</script>

<style lang="scss">

</style>