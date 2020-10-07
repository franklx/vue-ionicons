<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="contrast-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="256" r="208" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "contrast-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Contrast Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

