<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="stopwatch-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 232v-80"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 88V72M132 132l-12-12"/><circle cx="256" cy="272" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path d="M256 96a176 176 0 10176 176A176 176 0 00256 96z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "stopwatch-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Stopwatch Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

