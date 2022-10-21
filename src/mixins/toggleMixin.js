export default {
  props: {
    stateModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:stateModal', false)
    }
  },
}