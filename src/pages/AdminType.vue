<template>
  <div class="page-admin__type type">
    <h2 class="type__title">Типы</h2>

    <ElementsList
      class="type__elements-list"
      :elements="typeProduct"
      @deleteElement="deleteTypesAction"
      url="type"
    />

    <router-link
      class="type__link"
      to="type/creatingNewType"
    >
      <span class="material-symbols-outlined type__btn__material-symbols-outlined">add</span>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import ElementsList from '@/components/admin/ElementsList.vue';

export default {
  components: {
    ElementsList,
  },
  methods: {
    ...mapActions({
      getTypesAction: 'shop/getTypesAction',
      deleteTypesAction: 'shop/deleteTypesAction',
    }),
  },
  computed: {
    ...mapState({
      typeProduct: state => state.shop.typeProduct,
    }),
  },
  mounted() {
    this.getTypesAction();
  },
}
</script>

<style lang="scss">

</style>