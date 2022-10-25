<template>
  <header class="header">
    <div class="header__container container">
      <LogoComponent class="logo" />

      <div class="header__menu">
        <Navbar class="header__navbar" />
        <PhoneComponent class="header__phone" />
        <ShoppingCart class="header__shopping-cart" />
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import PhoneComponent from '@/components/PhoneComponent.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import LogoComponent from '@/components/LogoComponent.vue';

export default {
  components: {
    Navbar,
    PhoneComponent,
    ShoppingCart,
    LogoComponent,
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--base-bg-color);

  &__container {
    display: flex;
    align-items: center;
    column-gap: 24px;
    min-height: 100px;

    @include max-width-lg {
      min-height: 88px;
    }

    @include max-width-sm {
      column-gap: 20px;
      min-height: 82px;
    }

    @include max-width-xs {
      column-gap: 16px;
      min-height: 76px;
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
    justify-content: space-between;
    gap: 20px;

    @include max-width-md {
      justify-content: flex-end;
      gap: 16px;
    }
  }

  &__phone {

  }

  &__shopping-cart {
    margin: 18px 45px 0 0;

    @include max-width-md {
      margin: 18px 25px 0 0;
    }

    @include max-width-xs {
      margin: 18px 18px 0 0;
    }
  }
}
</style>