<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="add-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path data-fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "add-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Add Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

