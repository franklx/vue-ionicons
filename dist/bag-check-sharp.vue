<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="bag-check-sharp-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm50.81 252.12l-61.37-71.72 24.31-20.81L230 350.91l87.51-109.4 25 20z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bag-check-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Bag Check Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

