<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="phone-landscape-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M0 130v252a18 18 0 0018 18h476a18 18 0 0018-18V130a18 18 0 00-18-18H18a18 18 0 00-18 18zm448 234H64V148h384z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "phone-landscape-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Phone Landscape Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

