<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="battery-half-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M17 384h432V128H17zm32-224h368v192H49z"/><path d="M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "battery-half-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Battery Half Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

