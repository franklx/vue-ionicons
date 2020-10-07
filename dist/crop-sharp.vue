<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="crop-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44H166z"/><path d="M346 320h44V122H192v44h154v154z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "crop-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Crop Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

