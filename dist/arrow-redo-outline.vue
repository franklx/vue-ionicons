<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="arrow-redo-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "arrow-redo-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Arrow Redo Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

