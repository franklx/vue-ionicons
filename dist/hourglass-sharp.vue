<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="hourglass-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M416 32H96v112l108 112L96 368v112h320V368L308 256l108-112zM272 224v112l91 96H148l92-96V224l-80-80h192z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "hourglass-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Hourglass Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

