<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="enter-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M160 240h147.37l-64-64L266 153.37 368.63 256 266 358.63 243.37 336l64-64H160v148a12 12 0 0012 12h296a12 12 0 0012-12V92a12 12 0 00-12-12H172a12 12 0 00-12 12zM32 240h128v32H32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "enter-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Enter Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

