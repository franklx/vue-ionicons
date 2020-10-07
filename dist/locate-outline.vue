<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="locate-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 96V56M256 456v-40"/><path d="M256 112a144 144 0 10144 144 144 144 0 00-144-144z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M416 256h40M56 256h40"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "locate-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Locate Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

