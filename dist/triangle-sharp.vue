<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="triangle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 32L20 464h472L256 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "triangle-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Triangle Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

