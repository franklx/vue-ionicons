<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="play-skip-forward-circle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 288h-32v-69l-128 77.37V167.49L304 245v-69h32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "play-skip-forward-circle-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Play Skip Forward Circle Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

