<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="git-branch-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M352 96a64 64 0 00-58.86 89.11l-101.14 88V151.39a64 64 0 10-64 0v209.22a64 64 0 1064 0V358l154.25-134.27c1.9.17 3.81.27 5.75.27a64 64 0 000-128zM160 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm192-256a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "git-branch-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Git Branch Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

