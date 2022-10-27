<template>
  <div class="pagination">
    <div class="pagination__container container">
      <ul class="pagination__list">
        <li class="pagination__item pagination__item--chevron">
          <span class="pagination__material-symbols-outlined material-symbols-outlined">chevron_left</span>
        </li>

        <li class="pagination__item pagination__item--active">
          1
        </li>
        <li class="pagination__item">
          2
        </li>
        <li class="pagination__item">
          3
        </li>
        <li class="pagination__item">
          4
        </li>
        <li class="pagination__item">
          5
        </li>

        <li class="pagination__item pagination__item--chevron">
          <span class="pagination__material-symbols-outlined material-symbols-outlined">chevron_right</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

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
    background-color: rgba(var(--muted-color-rgb), 0.7);
    cursor: pointer;
    border-radius: var(--small-border-radius);
    height: 30px;
    width: 30px;
    font-size: 20px;

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
    background-color: var(--base-bg-color);
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