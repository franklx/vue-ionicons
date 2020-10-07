<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="man-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M208 208v264a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24" data-fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path d="M256 336v136a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V208" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path d="M208 192v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88a48 48 0 0148-48h96a48 48 0 0148 48v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="56" r="40" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "man-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Man Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

