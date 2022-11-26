<template>
  <div class="pagination">
    <div class="pagination__container container">
      <ul class="pagination__list">
        <li 
          class="pagination__item pagination__item--chevron"
          :class="{ 'pagination__item--active': page <= 1 }"
          @click="prevBtn"
        >
          <span class="pagination__material-symbols-outlined material-symbols-outlined">chevron_left</span>
        </li>

        <li 
          class="pagination__item"
          v-for="pageItem in pages"
          :key="pageItem"
          :class="{ 'pagination__item--active': page === pageItem }"
          @click="setPage(pageItem)"
        >
          {{ pageItem }}
        </li>

        <li 
          class="pagination__item pagination__item--chevron"
          :class="{ 'pagination__item--active': page >= pageCount }"
          @click="nextBtn"
        >
          <span class="pagination__material-symbols-outlined material-symbols-outlined">chevron_right</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      page: state => state.shop.page,
      totalProduct: state => state.shop.totalProduct,
      limit: state => state.shop.limit,
    }),

    pageCount() {
      return Math.ceil(this.totalProduct / this.limit)
    },

    pages() {
      const pages = [];

      for (let i = 0; i < this.pageCount; i++) {
        pages.push(i + 1)
      }

      return pages
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'shop/setPage',
    }),

    prevBtn() {
      if (this.page > 1) {
        this.setPage(this.page - 1)
      } 
    },

    nextBtn() {
      if (this.page < this.pageCount) {
        this.setPage(this.page + 1)
      } 
    }
  },
}
</script>

<style lang="scss">
.pagination {
  margin: 12px 0 30px 0;

  @include min-width-xs {
    margin: 12px 0 38px 0;
  }
  @include min-width-md {
    margin: 12px 0 45px 0;
  }

  &__container {
    display: flex;
    justify-content: center;
  }

  &__list {
    @extend %list;
    display: flex;
    gap: 12px;

    @include min-width-xs {
      gap: 26px;
    }
    @include min-width-md {
      gap: 46px;
    }
  }

  &__item {
    @include blockCenter;
    background-color: var(--base-bg-color);
    cursor: pointer;
    border-radius: var(--small-border-radius);
    height: 30px;
    width: 30px;
    font-size: 20px;
    transition: 0.3s;

    @include min-width-xs {
      height: 40px;
      width: 40px;
      font-size: 28px;
    }
    @include min-width-md {
      height: 60px;
      width: 60px;
      font-size: var(--title-font-size);
    }
  }

  &__item--chevron {
    background-color: var(--base-bg-color);
  }

  &__item--active {
    cursor: default;
    background-color: rgba(var(--muted-color-rgb), 0.7);
  }

  &__material-symbols-outlined {
    font-size: 30px;
    font-weight: 700;

    @include min-width-md {
      font-size: var(--big-font-size);
    }
  }
}
</style>