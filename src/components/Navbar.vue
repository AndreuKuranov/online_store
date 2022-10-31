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
      >
        <router-link
          class="navbar__link navbar__link--select"
          to="/categorie"
          @pointerover="overLink"
          @pointerout="outLink"
        >
          Категории
        </router-link>
        <div
            class="navbar__block-select"
            ref="dropSelect"
            @pointerover="overSelect"
            @pointerout="outSelect"
          >
            <my-select
              class="navbar__select"
              :options="selectValue"
              @change="$router.push($event.target.value)"
            />
          </div>
      </li>
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
        { id: 'navList2', link: '#', textLink: 'Новости' },
        { id: 'navList3', link: '#', textLink: 'О нас' },
      ],
      selectValue: [
        { id: 'value1', value: '#', name: '1'},
        { id: 'value2', value: '/', name: '2'},
        { id: 'value3', value: '/', name: '3'},
      ],
      selectHover: false,
    }
  },
  methods: {
    noneSelect() {
      setTimeout(() => {
        if (!this.selectHover) {
          this.$refs.dropSelect.style.display = 'none';
        }
      }, 500)
    },
    overLink() {
      this.$refs.dropSelect.style.display = 'block';
    },
    outLink() {
      this.noneSelect();
    },
    overSelect() {
      this.selectHover = true;
    },
    outSelect() {
      this.selectHover = false;
      this.noneSelect();
    }
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

  &__block-select {
    display: none;
    position: relative;
  }

  &__select {
    position: absolute;
    top: 0;
    z-index: 1;
  }
}
</style>