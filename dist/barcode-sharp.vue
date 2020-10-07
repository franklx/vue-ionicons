<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="barcode-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M400 400.33l48-.33V112l-48 .33M112 112l-48 .33v288l48-.33M384 192v128M320 160v192M256 176v160M192 160v192M128 192v128"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "barcode-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Barcode Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

