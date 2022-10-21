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
            class="d-flex p-2 rounded-circle btn-danger btn__close"
            @click="closeModal"
          >
            <span class="material-symbols-outlined">close</span>
          </my-button>
        <slot></slot>
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

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.modal__content {
  position: relative;
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
.btn__close {
  position: absolute;
  top: -21px;
  right: -21px;
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