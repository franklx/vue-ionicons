<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="person-add-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z"/><circle cx="288" cy="144" r="112"/><path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "person-add-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Person Add Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

