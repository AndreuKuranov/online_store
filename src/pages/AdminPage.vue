<template>
  <div class="page__admin admin">
    <div class="admin__container container">
      <div class="admin__body">
        <div class="admin__navbar navbar-admin">
          <ul class="navbar-admin__list">
            <li 
              class="navbar-admin__item"
              v-for="item in navList"
              :key="item.id"
            >
              <router-link
                class="navbar-admin__link"
                :to="`/admin/${item.id}`"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="admin__page page-admin">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        navList: [
          { id: 'type', name: 'Типы' },
          { id: 'brand', name: 'Бренды' },
          { id: 'product', name: 'Продукты' },
        ]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
.admin {
  margin: 30px 0 0 0;

  &__container {

  }

  &__body {
    display: grid;
    gap: 20px;
    grid-template-columns: 180px 1fr;
  }

  &__navbar {

  }

  &__page {

  }
}

.navbar-admin {

  &__list {
    @extend %list;
    margin-top: 25px;
    display: grid;
    gap: 15px;
  }

  &__item {
    
  }

  &__link {
    @extend %link;
    @include blockCenter;
    width: 100%;
    min-height: 30px;
    background-color: var(--success-color);
    border-radius: 5px;
    color: var(--light-color);
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 0px 7px rgba(var(--dark-color-rgb), 0.7);
    }
  }
}

.page-admin {

}
</style>