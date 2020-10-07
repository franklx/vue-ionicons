<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="checkmark-done-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "checkmark-done-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Checkmark Done Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

