<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="keypad-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="448" r="32" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="320" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path d="M288 192a32 32 0 11-32-32 32 32 0 0132 32z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="64" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="384" cy="320" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="384" cy="192" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="384" cy="64" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="128" cy="320" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="128" cy="192" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="128" cy="64" r="32" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "keypad-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Keypad Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

