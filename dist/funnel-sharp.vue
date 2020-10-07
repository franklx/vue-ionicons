<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="funnel-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M0 48l192 240v128l128 48V288L512 48H0z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "funnel-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Funnel Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

