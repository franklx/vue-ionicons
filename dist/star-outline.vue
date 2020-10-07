<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="star-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "star-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Star Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

