<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="return-down-forward-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M400 352l64-64-64-64"/><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M448 288H48V160"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "return-down-forward-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Return Down Forward Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

