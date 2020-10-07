<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="reader-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="96" y="48" width="320" height="416" rx="48" ry="48" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 128h160M176 208h160M176 288h80"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "reader-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Reader Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

