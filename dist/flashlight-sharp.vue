<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="flashlight-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M330 16l-42.68 42.7L453.3 224.68 496 182 330 16z"/><ellipse cx="224.68" cy="287.3" rx="20.03" ry="19.96" data-fill="none"/><path d="M429.21 243.85L268 82.59 249.65 168 16 402l94 94 234.23-233.8zm-189 56.07a20 20 0 110-25.25 20 20 0 01-.02 25.25z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "flashlight-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Flashlight Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

