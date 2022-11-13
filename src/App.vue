<template>
  <div class="wrapper">
    <header-component />

    <main class="page">
      <router-view />
    </main>

    <footer-component />
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import { check } from '@/http/userAPI';
  import { mapMutations } from 'vuex';

  export default {
    components: { 
      HeaderComponent, 
      FooterComponent 
    },
    methods: {
      ...mapMutations({
        setIsAuth: 'auth/setIsAuth',
        setUser: 'auth/setUser',
      })
    },
    mounted() {
      check().then(data => {
        this.setIsAuth(true);
        this.setUser(data);
      })
    }
  }
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.page {
  flex: 1 1 auto;
}
</style>