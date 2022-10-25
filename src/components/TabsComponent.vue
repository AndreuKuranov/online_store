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
  margin: 30px 0;

  @include max-width-md {
    margin: 24px 0;
  }

  &__container {

  }

  &__list {
    @extend %list;
    display: flex;
    gap: 20px;
    font-size: var(--medium-font-size);

    @include max-width-md {
      font-size: 20px;
      gap: 12px;
    }
  }

  &__item-list {
    background-color: rgba(var(--muted-color-rgb), 0.7);
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 16px 17px;
    transition: 0.3s;

    @include max-width-sm {
      padding: 10px 17px;
    }
  }

  &__material-symbols-outlined {
    display: none;
    font-size: 30px;

    @include max-width-sm {
      display: block;
    }
  }

  &__text {
    @include max-width-sm {
      display: none;
    }
  }

  &__item-lista--active {
    background-color: var(--base-bg-color);
    cursor: default;
  }
}
</style>