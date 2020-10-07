<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="pulse-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 320h64l64-256 64 384 64-224 32 96h64"/><circle cx="432" cy="320" r="32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "pulse-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Pulse Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

