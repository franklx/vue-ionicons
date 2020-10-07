<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="caret-back-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M368 64L144 256l224 192V64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "caret-back-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Caret Back Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

