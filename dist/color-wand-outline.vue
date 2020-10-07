<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="color-wand-outline-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><rect data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" x="280.48" y="122.9" width="63.03" height="378.2" rx="31.52" transform="rotate(-45 312.002 311.994)"/><path d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z"/><path stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "color-wand-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Color Wand Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

