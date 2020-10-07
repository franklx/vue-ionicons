<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="filter-circle-outline-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path data-fill="none" stroke="#000" stroke-width="32" stroke-miterlimit="10" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"/><path fill="none" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" d="M144 208h224M176 272h160M224 336h64"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "filter-circle-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Filter Circle Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

