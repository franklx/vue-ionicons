<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="man-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="56" r="56"/><path d="M336 128H176a32 32 0 00-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 00-32-32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "man-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Man Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

