<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="attach-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M216.08 192v143.85a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 10191 0V159.74" data-fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "attach-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Attach Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

