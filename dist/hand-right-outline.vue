<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="hand-right-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M432 320V144a32 32 0 00-32-32h0a32 32 0 00-32 32v112M368 256V80a32 32 0 00-32-32h0a32 32 0 00-32 32v160M240 241V96a32 32 0 00-32-32h0a32 32 0 00-32 32v224M304 240V48a32 32 0 00-32-32h0a32 32 0 00-32 32v192" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M432 320c0 117.4-64 176-152 176s-123.71-39.6-144-88L83.33 264c-6.66-18.05-3.64-34.79 11.87-43.6h0c15.52-8.82 35.91-4.28 44.31 11.68L176 320" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "hand-right-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Hand Right Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

