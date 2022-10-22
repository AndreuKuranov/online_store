<template>
  <section class="tabs">
    <div class="tabs__container container">
      <ul class="tabs__list">
        <li 
          class="tabs__item-list"
          v-for="item in tabTitles" 
          :title="item.title"
          :key="item.title"
          :class="{ selected: item.title === selectedTitle }"
          @click="selectedTitle = item.title"
        >
          <span class="tabs__material-symbols-outlined material-symbols-outlined">{{ item.icon }}</span>
          <span class="tabs__text">{{ item.title }}</span>
        </li>
      </ul>
      <slot />
    </div>
  </section>
</template>

<script>
import { ref, provide } from 'vue';

export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map(tab => {
      return {
        title: tab.props.title, 
        icon: tab.props.icon,
      }
    }));
    const selectedTitle = ref(tabTitles.value[0].title);

    provide("selectedTitle", selectedTitle);
    return {
      selectedTitle,
      tabTitles,
    }
  }
}
</script>

<style lang="scss">
.tabs {
  margin: px2rem(30px) 0 px2rem(30px) 0;

  &__container {

  }

  &__list {
    @extend %list;
    display: flex;
    gap: px2rem(20px);
    font-size: px2rem(24px);
  }

  &__item-list {
    background-color: rgba(#D6E6F5, 0.7);
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: px2rem(16px) px2rem(17px);
    transition: 0.3s;

    @media (max-width: 576px) {
      padding: px2rem(10px) px2rem(17px);
    }
  }

  &__material-symbols-outlined {
    display: none;
    font-size: 30px;

    @media (max-width: 576px) {
      display: block;
    }
  }

  &__text {
    @media (max-width: 576px) {
      display: none;
    }
  }
}

.selected {
  background-color: #C9DEF1;
  cursor: default;
}
</style>