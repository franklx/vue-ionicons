<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="warning-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "warning-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Warning Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

