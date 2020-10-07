<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="paper-plane-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M496 16L15.88 208 195 289 448 64 223 317l81 179L496 16z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "paper-plane-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Paper Plane Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

