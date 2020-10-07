<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ban-outline-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="208" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" d="M108.92 108.92l294.16 294.16"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ban-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ban Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

