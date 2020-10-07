<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="cloud-circle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm70 280H196c-33 0-60-23-60-56 0-34.21 26-53 56-56 7.28-23.9 29.5-48 64-48 36.5 0 67.55 27.23 72 72 21.49 1.12 48 14.09 48 44 0 30.28-22.5 44-50 44z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "cloud-circle-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Cloud Circle Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

