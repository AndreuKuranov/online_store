<template>
  <div class="filter">
    <div class="filter__container container">
      <div class="filter__body">
        <h3 class="filter__title">{{ title }}</h3>
        <ul class="filter__list">
          <li
            class="filter__item"
            v-for="item in listElements"
            :key="item.id"
          >
            <my-button
              :class="{ 'btn-active': item.id === selected?.id }"
              class="filter__btn"
              type="button"
              @click="checkSelected(item, item.id)"
            >
              {{ item.name }}
            </my-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listElements: {
      type: Array,
      required: true
    },
    selected: {
      type: Object || null,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
    setSelected(value) {
      this.$emit("setSelected", value);
    },
    checkSelected(item, id) {
      if (id === this.selected?.id) {
        this.setSelected(null);
      } else {
        this.setSelected(item);
      }
    },
  },
}
</script>

<style lang="scss">
.filter {
  margin-bottom: 20px;

  &__container {

  }

  &__title {
    margin: 0;
  }

  &__body {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__list {
    @extend %list;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__item {
    
  }

  &__btn {
    min-height: 40px;
  }
}

.btn-active {
  background-color: #ffc107;
}
</style>