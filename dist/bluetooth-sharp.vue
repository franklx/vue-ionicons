<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="bluetooth-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M397.41 161.13L236-.28v212.8l-94.17-80.72-26 30.37L225.27 256 115.8 349.83l26 30.37 94.2-80.72v212.8l161.41-161.41L286.73 256zM276 96.28l62.59 62.59L276 212.52zm62.58 256.85L276 415.72V299.48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bluetooth-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Bluetooth Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

