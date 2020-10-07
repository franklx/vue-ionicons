<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="stop-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M80 80h352v352H80z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "stop-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Stop Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

