<template>
  <my-modal 
    :stateModal="modalVisible"
    @setStateModal="closeModal"
  >
    <OrderingForm />
  </my-modal>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import OrderingForm from '@/components/OrderingForm.vue';

export default {
  components: {
    OrderingForm,
  },
  computed: {
    ...mapState({
      modalVisible: state => state.modal.modalVisible,
    }),
  },
  methods: {
    ...mapMutations({
      setModalVisible: 'modal/setModalVisible',
    }),

    closeModal(val) {
      this.setModalVisible(val);
    }
  }
}
</script>

<style lang="scss">

</style>