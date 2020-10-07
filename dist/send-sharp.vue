<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="send-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M16 464l480-208L16 48v160l320 48-320 48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "send-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Send Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

