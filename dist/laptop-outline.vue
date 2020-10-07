<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="laptop-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="48" y="96" width="416" height="304" rx="32.14" ry="32.14" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M16 416h480"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "laptop-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Laptop Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

