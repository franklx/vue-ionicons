<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="git-pull-request-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="128" cy="416" r="48" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 144v224M288 160l-64-64 64-64"/><circle cx="128" cy="96" r="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="384" cy="416" r="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M240 96h84a60 60 0 0160 60v212" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "git-pull-request-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Git Pull Request Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

