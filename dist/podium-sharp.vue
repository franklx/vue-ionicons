<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="podium-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M160 32h192v448H160zM384 192h112v288H384zM16 128h112v352H16z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "podium-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Podium Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

