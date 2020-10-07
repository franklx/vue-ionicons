<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="play-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M96 448l320-192L96 64v384z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "play-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Play Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

