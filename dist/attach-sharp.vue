<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="attach-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M216.08 192v143.55a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 00191 0V159.44" data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "attach-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Attach Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

