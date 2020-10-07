<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="open-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M201.37 288l176-176H48v352h352V134.63l-176 176L201.37 288z"/><path d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48H320z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "open-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Open Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

