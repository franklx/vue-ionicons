<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="refresh-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M320 146s24.36-12-64-12a160 160 0 10160 160" data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M256 58l80 80-80 80"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "refresh-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Refresh Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

