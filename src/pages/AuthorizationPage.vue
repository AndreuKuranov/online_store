<template>
  <div class="page__authorization authorization">
    <div class="authorization__container container">
      <form @submit="onSubmit" class="authorization__form">
        <h3 class="authorization__title">Регистрация</h3>

        <div class="authorization__body">
          <div class="authorization__item">
            <label class="authorization__label" for="login">Логин</label>
            <my-input
              typy="text"
              class="authorization__input" 
              id="login"
              v-focus
              placeholder="login"
              v-model="login"
            />
          </div>

          <div class="authorization__item">
            <label class="authorization__label" for="password">Пароль</label>
            <my-input
              type="password"
              class="authorization__input" 
              id="password"
              placeholder="password"
              v-model="password"
            />
          </div>

          <div class="authorization__item">
            <my-button
              class="authorization__btn"
              @click="onLogoutButtonClick"
            >
              Войти
            </my-button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
console.log(process.env.VUE_APP_BASE_URL);
  export default {
    name: "Login",
    data() {
      return {
        login: '',
        password: '',
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('AuthModule/onLogin', {
          login: this.login,
          password: this.password,
        }).then(() => {
          this.$route.push({ name: 'HomeComponent' })
        })
      }
    },
    mutations: {
      onLogoutButtonClick() {
        this.$store.dispatch('AuthModule/onLogout').then(() => {
          location.reload();
        })
      }
    }
  }
</script>

<style scoped>

</style>