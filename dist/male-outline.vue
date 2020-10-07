<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="male-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="216" cy="296" r="152" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 160V64h-96M324 188L448 64"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "male-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Male Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

