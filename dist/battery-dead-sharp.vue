<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="battery-dead-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M32 144h400v224H32zM480 218.67v74.66"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "battery-dead-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Battery Dead Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

