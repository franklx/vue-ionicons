<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="leaf-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "leaf-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Leaf Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

