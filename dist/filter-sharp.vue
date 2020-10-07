<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="filter-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M16 120h480v48H16zM96 232h320v48H96zM192 344h128v48H192z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "filter-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Filter Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

