<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="navigate-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 64L64 240.14h200a8 8 0 018 8V448z" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "navigate-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Navigate Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

