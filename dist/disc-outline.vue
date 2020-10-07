<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="disc-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="256" r="208" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="96" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "disc-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Disc Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

