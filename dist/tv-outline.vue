<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="tv-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="32" y="96" width="448" height="272" rx="32.14" ry="32.14" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M128 416h256"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "tv-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Tv Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

