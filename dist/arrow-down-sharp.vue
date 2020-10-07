<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="arrow-down-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M112 268l144 144 144-144M256 392V100"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "arrow-down-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Arrow Down Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

