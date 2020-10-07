<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="git-network-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="128" cy="96" r="48" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="416" r="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 256v112"/><circle cx="384" cy="96" r="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M128 144c0 74.67 68.92 112 128 112M384 144c0 74.67-68.92 112-128 112" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "git-network-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Git Network Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

