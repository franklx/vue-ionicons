<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="invert-mode-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><circle data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" cx="256" cy="256" r="208"/><path d="M256 176v160a80 80 0 000-160zM256 48v128a80 80 0 000 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "invert-mode-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Invert Mode Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

