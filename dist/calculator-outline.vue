<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="calculator-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="112" y="48" width="288" height="416" rx="32" ry="32" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160.01 112H352v64H160.01z"/><circle cx="168" cy="248" r="24"/><circle cx="256" cy="248" r="24"/><circle cx="344" cy="248" r="24"/><circle cx="168" cy="328" r="24"/><circle cx="256" cy="328" r="24"/><circle cx="168" cy="408" r="24"/><circle cx="256" cy="408" r="24"/><rect x="320" y="304" width="48" height="128" rx="24" ry="24"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "calculator-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Calculator Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

