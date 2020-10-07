<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="cellular-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="416" y="96" width="64" height="320" rx="8" ry="8" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="288" y="176" width="64" height="240" rx="8" ry="8" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="160" y="240" width="64" height="176" rx="8" ry="8" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="32" y="304" width="64" height="112" rx="8" ry="8" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "cellular-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Cellular Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

