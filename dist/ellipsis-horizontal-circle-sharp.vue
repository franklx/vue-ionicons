<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ellipsis-horizontal-circle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-90 234a26 26 0 1126-26 26 26 0 01-26 26zm90 0a26 26 0 1126-26 26 26 0 01-26 26zm90 0a26 26 0 1126-26 26 26 0 01-26 26z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ellipsis-horizontal-circle-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ellipsis Horizontal Circle Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

