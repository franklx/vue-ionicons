<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ellipsis-horizontal-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="256" r="48"/><circle cx="416" cy="256" r="48"/><circle cx="96" cy="256" r="48"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ellipsis-horizontal-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ellipsis Horizontal Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

