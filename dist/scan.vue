<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="scan-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M342 444h46a56 56 0 0056-56v-46M444 170v-46a56 56 0 00-56-56h-46M170 444h-46a56 56 0 01-56-56v-46M68 170v-46a56 56 0 0156-56h46" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="44"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "scan-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Scan Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

