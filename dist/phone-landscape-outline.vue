<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="phone-landscape-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="128" y="16" width="256" height="480" rx="48" ry="48" transform="rotate(-90 256 256)" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M16 336v-24a8 8 0 018-8h0a16 16 0 0016-16v-64a16 16 0 00-16-16h0a8 8 0 01-8-8v-24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "phone-landscape-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Phone Landscape Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

