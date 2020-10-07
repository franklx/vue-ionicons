<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="list-circle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 184h128M224 256h128M224 327h128"/><path d="M448 258c0-106-86-192-192-192S64 152 64 258s86 192 192 192 192-86 192-192z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="168" cy="184" r="8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="168" cy="257" r="8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="168" cy="328" r="8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "list-circle-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "List Circle Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

