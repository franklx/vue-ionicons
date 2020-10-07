<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="planet-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="160" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "planet-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Planet Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

