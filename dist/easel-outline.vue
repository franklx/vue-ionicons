<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="easel-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="48" y="80" width="416" height="272" rx="32" ry="32" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "easel-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Easel Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

