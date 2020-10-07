<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="navigate-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M480 32L32 240h240v240L480 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "navigate-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Navigate Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

