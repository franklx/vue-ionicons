<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="radio-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="256.02" r="32"/><path d="M184.25 192.25a96 96 0 000 127.52M327.77 319.77a96 96 0 000-127.52M133.28 141.28a168 168 0 000 229.44M378.72 370.72a168 168 0 000-229.44M435 416a240.34 240.34 0 000-320M77 96a240.34 240.34 0 000 320" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "radio-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Radio Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

