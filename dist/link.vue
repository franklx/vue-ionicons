<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="link-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M200.66 352H144a96 96 0 010-192h55.41M312.59 160H368a96 96 0 010 192h-56.66M169.07 256h175.86" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "link-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Link Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

