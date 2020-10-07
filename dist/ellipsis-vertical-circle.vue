<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ellipsis-vertical-circle-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="256" r="26"/><circle cx="256" cy="346" r="26"/><circle cx="256" cy="166" r="26"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ellipsis-vertical-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ellipsis Vertical Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

