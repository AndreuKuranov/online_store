<template>
  <header class="header">
    <div class="header__container container">
      <LogoComponent class="logo" />

      <div class="header__menu">
        <Navbar class="header__navbar" />
        <PhoneComponent class="header__phone" />
        <ShoppingCart class="header__shopping-cart" />

        <router-link
          v-if="!isAuth"
          class="header__authorization-btn authorization-btn"
          to="/login"
          title="Войти"
        >
          <span class="authorization-btn__material-symbols-outlined material-symbols-outlined">person</span>
        </router-link>
        <my-button
          v-if="isAuth"
          title="Выйти"
          type="button"
          class="header__authorization-btn authorization-btn"
          @click="exit"
        >
          <span class="authorization-btn__material-symbols-outlined material-symbols-outlined">logout</span>
        </my-button>

      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import PhoneComponent from '@/components/PhoneComponent.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import LogoComponent from '@/components/LogoComponent.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    Navbar,
    PhoneComponent,
    ShoppingCart,
    LogoComponent,
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth,
      user: state => state.auth.user,
    }),
  },
  methods: {
    ...mapMutations({
      setIsAuth: 'auth/setIsAuth',
      setUser: 'auth/setUser',
    }),
    exit() {
      this.setIsAuth(false);
      this.setUser({});
      localStorage.removeItem('token');
      this.$router.go(0);
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--base-bg-color);

  &__container {
    display: flex;
    align-items: center;
    column-gap: 16px;
    min-height: 76px;

    @include min-width-xs {
      column-gap: 20px;
      min-height: 82px;
    }

    @include min-width-sm {
      min-height: 88px;
    }

    @include min-width-lg {
      min-height: 100px;
      column-gap: 24px;
    }
  }

  &__logo {

  }

  &__navbar {

  }

  &__menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;

    @include min-width-md {
      justify-content: space-between;
      gap: 20px;
    }
  }

  &__phone {

  }

  &__shopping-cart {
    margin: 18px 18px 0 0;

    @include min-width-xs {
      margin: 18px 25px 0 0;
    }

    @include min-width-md {
      margin: 18px 45px 0 0;
    }
  }

  &__authorization-btn {

  }
}

.authorization-btn {
  @extend %link;

  &__material-symbols-outlined {
    font-size: 28px;
    font-variation-settings: 'FILL' 1;

    @include min-width-xs {
      font-size: 32px;
    }
    @include min-width-md {
      font-size: 35px;
    }
  }
}
</style>