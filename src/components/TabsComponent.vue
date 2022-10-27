<template>
  <section class="tabs">
    <div class="tabs__container container">
      <ul class="tabs__list">
        <li 
          class="tabs__item-list"
          v-for="item in tabTitles" 
          :title="item.title"
          :key="item.title"
          :class="{ 'tabs__item-lista--active': item.title === selectedTitle }"
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
  margin: 24px 0;

  @include min-width-md {
    margin: 30px 0;
  }

  &__container {

  }

  &__list {
    @extend %list;
    display: flex;
    font-size: 20px;
    gap: 12px;

    @include min-width-md {
      gap: 20px;
      font-size: var(--medium-font-size);
    }
  }

  &__item-list {
    background-color: rgba(var(--muted-color-rgb), 0.7);
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px 17px;
    transition: 0.3s;

    @include min-width-sm {
      padding: 16px 17px;
    }
  }

  &__material-symbols-outlined {
    display: block;
    font-size: 30px;

    @include min-width-sm {
      display: none;
    }
  }

  &__text {
    display: none;

    @include min-width-sm {
      display: block;
    }
  }

  &__item-lista--active {
    background-color: var(--base-bg-color);
    cursor: default;
  }
}
</style>