<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="crop-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M144 48v272a48 48 0 0048 48h272" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M368 304V192a48 48 0 00-48-48H208M368 368v96M144 144H48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "crop-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Crop Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

