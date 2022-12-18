<template>
  <form @submit.prevent class="ordering-form">
    <h2 class="ordering-form__title">Создание бренда</h2>

    <div class="ordering-form__body">
      <div class="ordering-form__item">
        <AdminInput
          class="ordering-form__form-input"
          v-focus
          placeholder="Наименование"
          v-model="value"
        />
      </div>

      <div class="ordering-form__item">
        <AdminButton
          class="ordering-form__btn"
          type="button"
          @click="addBrand"
        >
          Создать
        </AdminButton>
      </div>
    </div>

  </form>
</template>

<script>
  import { createBrand } from '@/http/productAPI';
  import AdminButton from '@/components/admin/AdminButton.vue';
  import AdminInput from '@/components/admin/AdminInput.vue';

  export default {
    components: {
      AdminButton,
    },
    data() {
      return {
        value: '',
      }
    },
    methods: {
      addBrand() {
        createBrand({ name: this.value }).then(data => {
          this.value = '';
        })
      }
    }
  }
</script>

<style lang="scss">

</style>