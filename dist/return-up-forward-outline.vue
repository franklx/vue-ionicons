<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="return-up-forward-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 160l64 64-64 64"/><path d="M448 224H154c-58.76 0-106 49.33-106 108v20" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "return-up-forward-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Return Up Forward Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

