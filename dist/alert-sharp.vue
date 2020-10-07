<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="alert-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M240 80l8 240h16l8-240h-32zM240 400h32v32h-32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "alert-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Alert Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

