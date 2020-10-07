<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="today-outline-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><rect data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48"/><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32M384 48v32"/><rect fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x="112" y="224" width="96" height="96" rx="13"/><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M464 160H48"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "today-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Today Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

