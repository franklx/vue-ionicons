<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="calendar-outline-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><rect data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48"/><circle cx="296" cy="232" r="24"/><circle cx="376" cy="232" r="24"/><circle cx="296" cy="312" r="24"/><circle cx="376" cy="312" r="24"/><circle cx="136" cy="312" r="24"/><circle cx="216" cy="312" r="24"/><circle cx="136" cy="392" r="24"/><circle cx="216" cy="392" r="24"/><circle cx="296" cy="392" r="24"/><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32M384 48v32"/><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" d="M464 160H48"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "calendar-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Calendar Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

