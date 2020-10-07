<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="barbell-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M496 176h-58v-64h-76v122H150V112H74v64H16v160h58v64h76V278h212v122h76v-64h58V176z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "barbell-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Barbell Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

