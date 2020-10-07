<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="code-working-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="256" r="26" stroke="#000" stroke-miterlimit="10" stroke-width="10"/><circle cx="346" cy="256" r="26" stroke="#000" stroke-miterlimit="10" stroke-width="10"/><circle cx="166" cy="256" r="26" stroke="#000" stroke-miterlimit="10" stroke-width="10"/><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" d="M160 368L32 256l128-112M352 368l128-112-128-112"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "code-working-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Code Working Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

