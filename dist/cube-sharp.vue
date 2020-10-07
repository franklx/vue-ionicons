<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="cube-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M48 170v196.92L240 480V284L48 170zM272 480l192-113.08V170L272 284zm176-122.36zM448 144L256 32 64 144l192 112 192-112z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "cube-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Cube Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

