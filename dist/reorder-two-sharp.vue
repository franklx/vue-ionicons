<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="reorder-two-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-width="44" d="M118 304h276M118 208h276"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "reorder-two-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Reorder Two Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

