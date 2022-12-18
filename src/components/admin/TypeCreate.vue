<template>
  <form @submit.prevent class="ordering-form">
    <h2 class="ordering-form__title">Создание типа</h2>

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
          @click="addType"
        >
          Создать
        </AdminButton>
      </div>
    </div>

  </form>
</template>

<script>
import { createType } from '@/http/productAPI';
import AdminButton from '@/components/admin/AdminButton.vue';
import AdminInput from '@/components/admin/AdminInput.vue';

  export default {
    components: {
      AdminButton,
      AdminInput,
    },
    data() {
      return {
        value: '',
      }
    },
    methods: {
      addType() {
        createType({ name: this.value }).then(data => {
          this.value = '';
        })
      }
    }
  }
</script>

<style lang="scss">

</style>