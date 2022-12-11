<template>
  <div class="page__authorization authorization">
    <div class="authorization__container container">
      <form @submit.prevent class="authorization__form">
        <h3 class="authorization__title">{{ isLoginPage() ? 'Авторизация' : 'Регистрация' }}</h3>

        <div class="authorization__body">
          <div class="authorization__item">
            <label class="authorization__label" for="login">Логин</label>
            <my-input
              typy="text"
              class="authorization__input" 
              id="login"
              v-focus
              placeholder="login"
              v-model="email"
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
              type="button"
              @click="clickAuth"
            >
              {{ isLoginPage() ? 'Войти' : 'Зарегистрироваться' }}
            </my-button>

            <div class="authorization__link-block">
              <router-link
                class="authorization__link"
                :to="isLoginPage() ? regLink : logLink "
              >
                {{ isLoginPage() ? 'Зарегистрироваться' : 'Войти' }}
              </router-link>
            </div>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  import { registration, login } from '@/http/userAPI';
  import { pathRouters } from '@/router/routes.js';
  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: '',
        titleForm: '',
        btnForm: '',
        linkForm: '',
        textLinkForm: '',

        regLink: pathRouters.registration,
        logLink: pathRouters.login,
      }
    },
    methods: {
      ...mapMutations({
        setUser: 'auth/setUser',
      }),
      async clickAuth () {
        try {
          let data;

          if (this.isLoginPage()) {
            data = await login(this.email, this.password)
          } else {
            data = await registration(this.email, this.password)
          }

          this.setUser(data);
          this.$router.go(0);
        } catch(e) {
          console.log(e.response.data.message);
        }
      },
      isLoginPage() {
        return this.$route.path === this.logLink
      },

      // validLogin() {
      //   const em = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      //   return em.test(String(this.email))
      // },
      // validPassword() {
      //   const pas = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
      //   return pas.test(String(this.password))
      // },
      // valid() {
      //   return this.validLogin() && this.validPassword()
      // },
    },
    watch: {
      $route() {}
    }
  }
</script>

<style lang="scss" scoped>
.authorization {

  &__container {
    max-width: 500px;
  }

  &__form {

  }

  &__title {
    text-align: center;
  }

  &__body {
    display: grid;
    gap: 30px;
  }

  &__item {

  }

  &__label {
    display: block;
    font-size: 20px;
    margin: 0 0 10px 10px;
  }

  &__input {

  }

  &__link-block {
    display: flex;
    justify-content: center;
  }

  &__link {
    @extend %link;
    margin-top: 20px;
    font-size: 18px;
    position: relative;
  }

  @include link-active("&__link", var(--dark-color), 27px, 2px, 1px);

  &__btn {
    margin: 0 auto;
  }
}
</style>