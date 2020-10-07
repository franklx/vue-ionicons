<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="square-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M48 48h416v416H48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "square-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Square Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

