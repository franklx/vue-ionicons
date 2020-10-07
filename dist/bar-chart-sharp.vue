<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="bar-chart-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M496 496H16V16h32v448h448v32z"/><path d="M192 432H80V208h112zM336 432H224V160h112zM479.64 432h-112V96h112z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bar-chart-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Bar Chart Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

