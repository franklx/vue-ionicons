<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="logo-angular-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M213.57 256h84.85l-42.43-89.36L213.57 256z"/><path d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-angular-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Angular Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

