<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="flash-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M432 208H288l32-192L80 304h144l-32 192z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "flash-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Flash Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

