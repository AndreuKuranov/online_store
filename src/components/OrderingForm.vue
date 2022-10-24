<template>
  <form @submit.prevent class="ordering-form">
    <h2 class="ordering-form__title">Оформить заказ</h2>

    <div class="ordering-form__body">
      <div class="ordering-form__item">
        <my-input
          class="ordering-form__form-input" 
          id="name"
          v-focus
          placeholder="Ваше имя"
        />
        <!-- <label class="ordering-form__label" for="name">Ваше имя</label> -->
      </div>

      <div class="ordering-form__item">
        <my-input
          class="ordering-form__form-input" 
          id="phone"
          type="number"
          placeholder="Номер телефона"
        />
        <!-- <label class="ordering-form__label" for="phone">Номер телефона</label> -->
      </div>

      <div class="ordering-form__item">
        <my-input
          class="ordering-form__form-input" 
          id="address"
          placeholder="Адрес"
        />
        <!-- <label class="ordering-form__label" for="address">Адрес</label> -->
      </div>

      <div class="ordering-form__item">
        <my-input
          class="ordering-form__form-input" 
          id="city"
          placeholder="Город"
        />
        <!-- <label class="ordering-form__label" for="city">Город</label> -->
      </div>

      <div class="ordering-form__item">
        <my-button
          class="ordering-form__btn"
          type="button"
        >
          Оформить
        </my-button>
      </div>
    </div>

  </form>
</template>

<script>
import MyButton from './UI/MyButton.vue';

export default {
  components: { MyButton }
}
</script>

<style lang="scss">
.ordering-form {
  &__title {

  }

  &__body {
    display: grid;
    gap: 10px;
  }

  &__item {
    
  }

  &__form-input {

  }

  &__label {

  }

  &__btn {
    width: 100%;
    min-height: px2rem($baseHeightBtn);
  }
}
</style>