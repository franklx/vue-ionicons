<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="duplicate-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="128" y="128" width="336" height="336" rx="57" ry="57" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24M296 216v160M376 296H216" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "duplicate-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Duplicate Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

