<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="shuffle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h128l60-92"/><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 160h128l128 192h96M416 160h-96l-32 48"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "shuffle-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Shuffle Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

