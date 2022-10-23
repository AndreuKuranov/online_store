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

  export default {
    components: { 
      HeaderComponent, 
      FooterComponent 
    },
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