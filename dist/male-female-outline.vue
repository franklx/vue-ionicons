<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="male-female-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="216" cy="200" r="136" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M216 352v128M272 416H160M432 112V32h-80M335.28 128.72L432 32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "male-female-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Male Female Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

