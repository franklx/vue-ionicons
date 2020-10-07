<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="radio-button-on-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "radio-button-on-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Radio Button On Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

