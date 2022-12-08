<template>
  <div class="page__admin admin">
    <div class="admin__container container">
      <div class="admin__body">
<!--        Всё меню - отдельный компонент-->
        <div class="admin__navbar navbar-admin">
          <ul class="navbar-admin__list">
            <li 
              class="navbar-admin__item"
              v-for="item in navList"
              :key="item.id"
            >
              <!-- link-admin--active это очень странно выглядит, наверняка в библиотеке роутинга уже есть проверка по текущему урлу-->
              <router-link
                class="navbar-admin__link"
                :class="{ 'link-admin--active': correctUrl === `/admin/${item.id}` }"
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
import { mapState, mapMutations } from 'vuex';

export default {
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
    ...mapMutations({
      setCorrectUrl: 'shop/setCorrectUrl',
    }),
  },
  computed: {
    ...mapState({
      correctUrl: state => state.shop.correctUrl,
    }),
  },
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

.link-admin--active {
  background-color: #ffc107;
}
</style>