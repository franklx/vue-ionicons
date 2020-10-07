<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="link-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="36"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "link-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Link Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

