<template>
  <transition name="modal-bg">
    <div 
      class="modal" 
      v-if="stateModal" 
      @click="closeModal"
    >
      <div @click.stop class="modal__content">
        <my-button 
            type="button"
            class="modal__close"
            @click="closeModal"
          >
            <span class="material-symbols-outlined">close</span>
          </my-button>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
  import toggleMixin from '@/mixins/toggleMixin';

  export default {
    name: 'my-modal',
    mixins: [toggleMixin],
  }

</script>

<style lang="scss" scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba($darkColor, 0.5);
  position: fixed;
  display: flex;

  &__content {
    position: relative;
    margin: auto;
    background: $lightColor;
    border-radius: $mediumBorderRadius;
    min-height: 50px;
    min-width: 300px;
    padding: px2rem(20px);
  }

  &__close {
    position: absolute;
    top: -20px;
    right: -20px;
    height: 40px;
    width: 40px;
    background-color: $dangerColor;
    border-radius: $borderRadius50;
  }
}

.modal-bg-enter-active,
.modal-bg-leave-active {
  transition: opacity 0.5s ease;
}
.modal-bg-enter-from,
.modal-bg-leave-to {
  opacity: 0;
}
</style>