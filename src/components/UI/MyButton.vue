<template>
  <button 
    class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button',
  }
</script>

<style lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  border: none;
  font-size: px2rem(24px);
  line-height: 1.16;
  background-color: #57DE54;
  color: #fff;
  border-radius: px2rem(5px);
  transition: 0.3s;
  padding: px2rem(5px) px2rem(10px);
}
.btn:hover {
  box-shadow: 0px 0px px2rem(5px) rgba(#000, 0.5);
}
</style>