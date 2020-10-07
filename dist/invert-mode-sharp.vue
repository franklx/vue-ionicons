<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="invert-mode-sharp-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 432v-96a80 80 0 010-160V80c97.05 0 176 79 176 176s-78.95 176-176 176z"/><path d="M336 256a80 80 0 00-80-80v160a80 80 0 0080-80z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "invert-mode-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Invert Mode Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

