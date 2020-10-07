<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="trending-up-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 144h112v112"/><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M48 368l144-144 96 96 160-160"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "trending-up-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Trending Up Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

