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
  background: rgba(var(--dark-color-rgb), 0.5);
  position: fixed;
  display: flex;

  &__content {
    position: relative;
    margin: auto;
    background: var(--light-color);
    border-radius: var(--medium-border-radius);
    min-height: 50px;
    min-width: 300px;
    padding: 20px;

    @include max-width-sm {
      padding: 12px;
    }
  }

  &__close {
    position: absolute;
    top: -20px;
    right: -20px;
    min-height: 40px;
    width: 40px;
    background-color: var(--danger-color);
    border-radius: var(--border-radius-50);
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