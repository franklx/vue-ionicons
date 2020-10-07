<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="file-tray-stacked-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 16H64L32 176v144h448V176zm-12 160H320a64 64 0 01-128 0H76L98 58h316zM320 352a64 64 0 01-128 0H32v144h448V352z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "file-tray-stacked-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "File Tray Stacked Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

