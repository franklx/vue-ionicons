<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="play-forward-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M16 400l240-144L16 112v288zM256 400l240-144-240-144v288z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "play-forward-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Play Forward Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

