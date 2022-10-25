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
        <button 
          class="navbar__link"
          @click="$router.push(item.link)"
        >
          {{ item.textLink }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { id: 'navList1', link: '/categorie', textLink: 'Категории' },
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
    font-size: var(--big-font-size);

    @include max-width-xs {
      font-size: 34px;
    }
  }

  &__list {
    @extend %list;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2px;
    column-gap: 50px;
    font-size: var(--main-font-size);

    @include max-width-lg {
      column-gap: 30px;
    }

    @include max-width-md {
      display: none;
    }
  }

  &__item {
    padding: 5px 0;
    position: relative;
    transition: 0.5s ease-out;
    display: block;
  }

  @include link-active("&__item", var(--dark-color), 27px, 2px, 1px);

  &__link {
    @include button-clear;
    cursor: pointer;
  }
}
</style>