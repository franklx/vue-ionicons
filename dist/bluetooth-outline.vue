<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="bluetooth-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 352l224-192L256 48v416l112-112-224-192"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bluetooth-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Bluetooth Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

