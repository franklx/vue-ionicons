<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="trending-down-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 368h112V256"/><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M48 144l144 144 96-96 160 160"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "trending-down-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Trending Down Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

