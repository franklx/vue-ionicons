<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="battery-full-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M17 384h432V128H17zm32-224h368v192H49z"/><path d="M70.69 182.94h324.63v146.13H70.69zM465 202.67h32v106.67h-32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "battery-full-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Battery Full Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

