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
        <a class="navbar__link" :href="item.link">{{ item.textLink }}</a>
      </li>
    </ul>
</nav>
</template>

<script>
  export default {
    data() {
      return {
        navList: [
          {id: "navList1", link: "#", textLink: "Категории"},
          {id: "navList2", link: "#", textLink: "Новости"},
          {id: "navList3", link: "#", textLink: "О нас"},
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
    background-color: rgba($color: #000000, $alpha: 0);
    border: none;
    cursor: pointer;

    @media (min-width: 769px) {
      display: none !important;
    }
  }
  &__symbols {
    font-size: px2rem(40px);
  }
  &__list {
    @extend %list;
    display: flex;
    flex-wrap: wrap;
    padding-top: px2rem(2px);
    column-gap: px2rem(50px);
    row-gap: px2rem(10px);

    @media (max-width: 768px) {
      display: none !important;
    }
  }
  &__item {
    padding: 5px 0;
    position: relative;
    transition: 0.5s ease-out;
    display: block;
  }
  &__item:hover {
    color: $greenColor;
  }
  &__item::after {
    content: "";
    display: block;
    position: absolute;
    top: 27px;
    left: 50%;
    right: 50%;
    height: 2px;
    background-color: $greenColor;
    transition: 0.5s ease-out;
    border-radius: 1px;
  }
  &__item:hover::after {
    left: 0;
    right: 0;
  }
  &__link {
    @extend %link;
  }
}
</style>