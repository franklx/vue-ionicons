<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="triangle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 448L256 64l208 384H48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "triangle-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Triangle Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

