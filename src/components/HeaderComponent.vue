<template>
  <header class="header">
    <div class="header__container container">
      <LogoComponent class="logo" />
      <MenuComponent />
    </div>
  </header>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue';
import LogoComponent from '@/components/LogoComponent.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    MenuComponent,
    LogoComponent,
  },
  data() {
    return {

    }
  },
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

  &__menu {

  }
}
</style>