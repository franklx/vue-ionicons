<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="unlink-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg"  data-fill="none"><path d="M200.66 352H144a95.997 95.997 0 01-96-96 95.998 95.998 0 0196-96h55.41M312.59 160H368a95.996 95.996 0 0167.882 28.118 95.996 95.996 0 010 135.764A95.996 95.996 0 01368 352h-56.66" stroke="#000" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "unlink-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Unlink Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

