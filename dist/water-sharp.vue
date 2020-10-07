<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="water-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 43.91s-144 158.3-144 270.3c0 88.36 55.64 144 144 144s144-55.64 144-144c0-112-144-270.3-144-270.3zm16 362.3v-24a60.07 60.07 0 0060-60h24a84.09 84.09 0 01-84 84z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "water-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Water Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

