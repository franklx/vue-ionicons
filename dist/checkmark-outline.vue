<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="checkmark-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "checkmark-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Checkmark Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

