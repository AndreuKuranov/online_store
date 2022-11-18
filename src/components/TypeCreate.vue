<template>
  <form @submit.prevent class="ordering-form">
    <h2 class="ordering-form__title">Создание типа</h2>

    <div class="ordering-form__body">
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
  export default {
    data() {
      
    },
  }
</script>

<style lang="scss">

</style>