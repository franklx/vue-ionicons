<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="tv-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M447.86 384H64.14A48.2 48.2 0 0116 335.86V128.14A48.2 48.2 0 0164.14 80h383.72A48.2 48.2 0 01496 128.14v207.72A48.2 48.2 0 01447.86 384z"/><path stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M128 416h256"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "tv-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Tv Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

