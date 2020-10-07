<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="chevron-down-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "chevron-down-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Chevron Down Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

