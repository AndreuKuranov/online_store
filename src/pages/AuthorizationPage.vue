<template>
  <div class="page__authorization authorization">
    <div class="authorization__container container">
      <form @submit.prevent class="authorization__form">
        <h3 class="authorization__title">{{textForm.title}}</h3>

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
            <router-link
              class="authorization__link"
              :to="textForm.link"
            >
              {{textForm.textLink}}
            </router-link>

            <my-button
              class="authorization__btn"
              type="button"
              @click="clickAuth"
            >
              {{textForm.btn}}
            </my-button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  import { registration, login } from '@/http/userAPI';
  import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '@/utils/consts';
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: '',
        titleForm: '',
        btnForm: '',
        linkForm: '',
        textLinkForm: '',
      }
    },
    computed: {
      textForm() {
        let obj = {};

        if (this.checkUrl()) {
          obj.title = 'Авторизация';
          obj.btn = 'Войти';
          obj.textLink = 'Зарегистрироваться';
          obj.link = REGISTRATION_ROUTE;
        } else {
          obj.title = 'Регистрация';
          obj.btn = 'Зарегистрироваться';
          obj.textLink = 'Войти';
          obj.link = LOGIN_ROUTE;
        }

        return obj;
      },
    },
    methods: {
      ...mapMutations({
        setIsAuth: 'auth/setIsAuth',
        setUser: 'auth/setUser',
      }),
      async clickAuth () {
        try {
          let data;

          if (this.checkUrl()) {
            data = await login(this.email, this.password)
          } else {
            data = await registration(this.email, this.password)
          }

          this.setIsAuth(true);
          this.setUser(data);
          this.$router.go(0);
        } catch(e) {
          console.log(e.response.data.message);
        }
      },
      checkUrl() {
        return this.$route.path === LOGIN_ROUTE
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

<style scoped>

</style>