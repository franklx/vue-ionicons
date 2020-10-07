<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="grid-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M240 240H32V32h208zM480 240H272V32h208zM240 480H32V272h208zM480 480H272V272h208z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "grid-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Grid Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

