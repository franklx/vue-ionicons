<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="chevron-up-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M112 328l144-144 144 144"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "chevron-up-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Chevron Up Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

