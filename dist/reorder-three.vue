<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="reorder-three-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M102 256h308M102 176h308M102 336h308"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "reorder-three-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Reorder Three Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

