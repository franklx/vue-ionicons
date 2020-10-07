<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="albums-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M128 64h256v32H128zM96 112h320v32H96zM464 448H48V160h416z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "albums-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Albums Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

