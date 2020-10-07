<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="menu-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "menu-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Menu Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

