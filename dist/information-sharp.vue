<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="information-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="40" d="M196 220h64v172M187 396h138"/><path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "information-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Information Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

