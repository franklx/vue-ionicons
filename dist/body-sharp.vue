<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="body-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="56" r="56"/><path d="M464 128H48v52h144l-32 325.13 51 6.87 21.65-192h47.02L301 512l51-6.98L320 180h144v-52z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "body-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Body Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

