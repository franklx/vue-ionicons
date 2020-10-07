<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="repeat-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M320 120l48 48-48 48"/><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 168H64v96M192 392l-48-48 48-48"/><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M160 344h288v-96"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "repeat-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Repeat Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

