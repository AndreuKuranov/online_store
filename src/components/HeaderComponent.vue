<template>
  <header class="header">
    <div class="header__container container">
      <LogoComponent class="logo" />

      <div class="header__menu">
        <Navbar class="header__navbar" />
        <PhoneComponent class="header__phone" />
        <ShoppingCart class="header__shopping-cart" />

<!--
  Всё меню надо вынести в отдельный компонент, т.к. его логика не связана с HeaderComponent
  Сейчас компонент получился излишне объемным, и требуется дальнейший рефакторинг на составные части
-->
        <router-link
          v-if="!isAuth"
          class="header__authorization-btn authorization-btn"
          to="/login"
          title="Войти"
          :class="checkClass"
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

        <router-link
          v-if="user.role === 'ADMIN'"
          title="Перейти в аминпанель"
          type="button"
          class="header__admin-btn admin-btn"
          to="/admin"
        >
          <span class="admin-btn__material-symbols-outlined material-symbols-outlined">settings</span>
        </router-link>

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
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth,
      user: state => state.auth.user,
      correctUrl: state => state.shop.correctUrl,
    }),
    checkClass() {
      if (this.correctUrl === '/login' || this.correctUrl === '/registration') {
        return 'link--active'
      }
    }
  },
  methods: {
    ...mapMutations({
      setIsAuth: 'auth/setIsAuth',
      setUser: 'auth/setUser',
      setCorrectUrl: 'shop/setCorrectUrl',
    }),

    // популярнее называть logout()
    exit() {
      // эти два вызова надо схлопнуть в один вызов для vuex должен быть
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
    position: relative;

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

  &__admin-btn {
    @extend %link;
    @include blockCenter;

    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    top: 110px;
    right: 15px;
    z-index: 9999;
    background-color: var(--danger-color);
  }
}

// отдельный компонент, со своими собственными стилями
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