<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="hardware-chip-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="80" y="80" width="352" height="352" rx="48" ry="48" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="144" y="144" width="224" height="224" rx="16" ry="16" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 80V48M336 80V48M176 80V48M256 464v-32M336 464v-32M176 464v-32M432 256h32M432 336h32M432 176h32M48 256h32M48 336h32M48 176h32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "hardware-chip-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Hardware Chip Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

