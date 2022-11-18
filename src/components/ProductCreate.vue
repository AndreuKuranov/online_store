<template>
  <form @submit.prevent class="ordering-form">
    <h2 class="ordering-form__title">Создание продукта</h2>

    <div class="ordering-form__body">
      <div class="ordering-form__item">
        <my-select
          v-model="valueSelectedBrand"
          :options="brandProduct"
          :defaultOptionText="'Выберете бренд'"
        />
      </div>

      <div class="ordering-form__item">
        <my-select
          v-model="valueSelectedType"
          :options="typeProduct"
          :defaultOptionText="'Выберете тип'"
        />
      </div>

      <div class="ordering-form__item">
        <my-input
          class="ordering-form__form-input"
          v-focus
          placeholder="Наименование"
        />
      </div>

      <div class="ordering-form__item">
        <my-button
          class="ordering-form__btn"
          type="button"
        >
          Создать
        </my-button>
      </div>
    </div>

  </form>
</template>

<script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        valueSelectedBrand: '',
        valueSelectedType: '',
      }
    },
    computed: {
      ...mapState({
        typeProduct: state => state.shop.typeProduct,
        brandProduct: state => state.shop.brandProduct,
      }),
    },
  }
</script>

<style lang="scss">

</style>