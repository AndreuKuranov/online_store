<template>
  <nav class="navbar">
    <my-button 
      class="navbar__btn"
      type="button"
      title="Меню"
    >
      <span class="material-symbols-outlined navbar__symbols">menu</span>
    </my-button>
    <ul class="navbar__list">
      <li 
        class="navbar__item"
        v-for="item in navList"
        :key="item.id"
      >
        <router-link
          class="navbar__link"
          :to="item.link"
        >
          {{ item.textLink }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { id: 'navList1', link: '/categorie', textLink: 'Каталог' },
        { id: 'navList2', link: '#', textLink: 'Новости' },
        { id: 'navList3', link: '#', textLink: 'О нас' },
      ]
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
.navbar {
  &__btn {
    border: none;
    cursor: pointer;

    @include min-width-md {
      display: none !important;
    }
  }

  &__symbols {
    font-size: 34px;

    @include min-width-xs {
      font-size: var(--big-font-size);
    }
  }

  &__list {
    @extend %list;
    padding-top: 2px;
    column-gap: 30px;
    font-size: var(--main-font-size);
    display: none;

    @include min-width-md {
      display: flex;
      flex-wrap: wrap;
    }

    @include min-width-lg {
      column-gap: 50px;
    }
  }

  &__item {
    padding: 5px 0;
    position: relative;
    transition: 0.5s ease-out;
    display: block;
  }

  @include link-active("&__link", var(--dark-color), 27px, 2px, 1px);

  &__link {
    @include button-clear;
    @extend %link;
    cursor: pointer;
  }
}
</style>