<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="shapes-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "shapes-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Shapes Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

