<template>
  <div class="header__menu menu">
    <Navbar class="menu__navbar" />
    <PhoneComponent class="menu__phone" />
    <ShoppingCart class="menu__shopping-cart" />

    <router-link
      v-if="!isAuth"
      class="menu__authorization-btn"
      to="/login"
      title="Войти"
      :class="checkClass"
    >
      <span class="menu__material-symbols-outlined material-symbols-outlined">person</span>
    </router-link>
    <my-button
      v-if="isAuth"
      title="Выйти"
      type="button"
      class="menu__authorization-btn"
      @click="logout"
    >
      <span class="menu__material-symbols-outlined material-symbols-outlined">logout</span>
    </my-button>

    <router-link
      v-if="user?.role === 'ADMIN'"
      title="Перейти в аминпанель"
      type="button"
      class="menu__admin-btn"
      to="/admin"
    >
      <span class="menu__material-symbols-outlined material-symbols-outlined">settings</span>
    </router-link>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import PhoneComponent from '@/components/PhoneComponent.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  components: {
    Navbar,
    PhoneComponent,
    ShoppingCart,
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
      correctUrl: state => state.shop.correctUrl,
    }),
    ...mapGetters({
      isAuth: 'auth/isAuth',
    }),
    checkClass() {
      if (this.correctUrl === '/login' || this.correctUrl === '/registration') {
        return 'link--active'
      }
    }
  },
  methods: {
    ...mapMutations({
      setUser: 'auth/setUser',
      setCorrectUrl: 'shop/setCorrectUrl',
    }),

    logout() {
      this.setUser(null);
      localStorage.removeItem('token');
      this.$router.go(0);
    },

  }
}
</script>

<style lang="scss" scoped>

.menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  @include min-width-md {
    justify-content: space-between;
    gap: 20px;
  }

  &__navbar {

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

  &__authorization-btn {
    @extend %link;
  }

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