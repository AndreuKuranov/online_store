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
          placeholder="Наименование"
        />
      </div>

      <div class="ordering-form__item">
        <my-input
          class="ordering-form__form-input"
          placeholder="Цена"
          type="number"
        />
      </div>

      <div class="ordering-form__item">
        <input
          type="file"
        />
      </div>

      <div class="ordering-form__item">
        <my-button
          class="ordering-form__btn"
          type="button"
          @click="setInfo"
        >
          Добавить новое свойство
        </my-button>
      </div>

      <div class="ordering-form__item">

        <div 
          class="ordering-form__body"
          v-for="item in info"
          :key="item.number"
        >
          <div class="ordering-form__item">
            <my-input
              class="ordering-form__form-input"
              placeholder="Введите название свойства"
            />
          </div>

          <div class="ordering-form__item">
            <my-input
              class="ordering-form__form-input"
              placeholder="Введите описание свойства"
            />
          </div>

          <div class="ordering-form__item">
            <my-button
              class="ordering-form__btn"
              type="button"
              @click="removeInfo(item.number)"
            >
              Удалить свойство
            </my-button>
          </div>
        </div>
  
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
  import { uniqueId } from '@/functions/functions.js';

  export default {
    data() {
      return {
        valueSelectedBrand: '',
        valueSelectedType: '',
        info: [],
      }
    },
    computed: {
      ...mapState({
        typeProduct: state => state.shop.typeProduct,
        brandProduct: state => state.shop.brandProduct,
      }),
    },
    methods: {
      setInfo() {
        this.info.push({ title: '', description: '', number: uniqueId() })
      },
      removeInfo(number) {
        this.info = this.info.filter(item => item.number !== number)
      }
    }
  }
</script>

<style lang="scss">

</style>