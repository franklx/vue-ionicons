<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="tablet-landscape-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="80" y="16" width="352" height="480" rx="48" ry="48" transform="rotate(-90 256 256)" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "tablet-landscape-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Tablet Landscape Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

