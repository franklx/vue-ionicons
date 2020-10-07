<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="swap-horizontal-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "swap-horizontal-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Swap Horizontal Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

