<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="alert-circle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" d="M240 304h32l6-160h-44l6 160z"/><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm20 319.91h-40v-40h40zM272 304h-32l-6-160h44z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "alert-circle-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Alert Circle Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

