<template>
  <ul>
    <li
      v-for="item in productInfo"
      :key="item.id"
    >
      {{ item.title }}: {{ item.description }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    productInfo: {
      
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">

</style>