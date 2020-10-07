<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="film-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="48" y="96" width="416" height="320" rx="28" ry="28" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="384" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="384" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="384" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="384" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="48" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="48" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="48" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="48" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="128" y="96" width="256" height="160" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="128" y="256" width="256" height="160" rx="28" ry="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "film-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Film Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

