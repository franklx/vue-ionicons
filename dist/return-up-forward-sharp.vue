<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="return-up-forward-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M400 160l64 64-64 64"/><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M448 224H48v128"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "return-up-forward-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Return Up Forward Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

