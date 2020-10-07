<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="infinite-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32" data-fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "infinite-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Infinite Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

