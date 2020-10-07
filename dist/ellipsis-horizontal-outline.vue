<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ellipsis-horizontal-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="256" r="32" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="416" cy="256" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="96" cy="256" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ellipsis-horizontal-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ellipsis Horizontal Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

