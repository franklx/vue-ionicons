<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="search-circle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path d="M232 160a72 72 0 1072 72 72 72 0 00-72-72z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M283.64 283.64L336 336"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "search-circle-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Search Circle Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

