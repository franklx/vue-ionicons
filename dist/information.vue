<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="information-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M196 220h64v172"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M187 396h138"/><path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "information-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Information Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

