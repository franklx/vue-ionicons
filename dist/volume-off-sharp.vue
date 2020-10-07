<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="volume-off-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M237.65 176.1H144v159.8h93.65L368 440V72L237.65 176.1z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "volume-off-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Volume Off Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

