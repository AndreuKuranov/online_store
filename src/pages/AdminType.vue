<template>
  <div class="page-admin__type type">
    <h2 class="type__title">Типы</h2>

    <ElementsList
      class="type__elements-list"
      :elements="typeProduct"
      @deleteElement="deleteTypesAction"
      url="type"
      urlCreate="type/createType"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ElementsList from '@/components/admin/ElementsList.vue';
import LinkAdd from '@/components/admin/LinkAdd.vue';

export default {
  components: {
    ElementsList,
    LinkAdd,
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
.type {
  margin-bottom: 30px;

  &__title {

  }

  &__elements-list {

  }
}
</style>