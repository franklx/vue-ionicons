<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="swap-vertical-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "swap-vertical-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Swap Vertical Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

