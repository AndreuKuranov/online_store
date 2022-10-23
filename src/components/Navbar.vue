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
          {id: 'navList1', link: '/categorie', textLink: 'Категории'},
          {id: 'navList2', link: '#', textLink: 'Новости'},
          {id: 'navList3', link: '#', textLink: 'О нас'},
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

    @media (min-width: 769px) {
      display: none !important;
    }
  }

  &__symbols {
    font-size: px2rem($bigFontSize);
  }

  &__list {
    @extend %list;
    display: flex;
    flex-wrap: wrap;
    padding-top: px2rem(2px);
    column-gap: px2rem(50px);
    font-size: px2rem($mainFontSize);

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__item {
    padding: px2rem(5px) 0;
    position: relative;
    transition: 0.5s ease-out;
    display: block;
  }

  &__item:hover {

  }

  &__item::after {
    @extend %afterBefore;
    top: px2rem(27px);
    left: 50%;
    right: 50%;
    height: 2px;
    background-color: $darkColor;
    transition: 0.5s ease-out;
    border-radius: 1px;
  }

  &__item:hover::after {
    left: 0;
    right: 0;
  }

  &__link {
    @include button-clear;
    cursor: pointer;
  }
}
</style>