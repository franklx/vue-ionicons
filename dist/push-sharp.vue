<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="push-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M272 352V204.63l64 64L358.63 246 256 143.37 153.37 246 176 268.63l64-64V352H92a12 12 0 01-12-12V44a12 12 0 0112-12h328a12 12 0 0112 12v296a12 12 0 01-12 12zM240 352h32v128h-32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "push-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Push Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

