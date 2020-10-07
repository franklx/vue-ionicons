<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="card-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="48" y="96" width="416" height="320" rx="56" ry="56" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="60" d="M48 192h416M128 300h48v20h-48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "card-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Card Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

