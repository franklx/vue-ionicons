<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="apps-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="48" y="48" width="112" height="112" rx="8" ry="8"/><rect x="200" y="48" width="112" height="112" rx="8" ry="8"/><rect x="352" y="48" width="112" height="112" rx="8" ry="8"/><rect x="48" y="200" width="112" height="112" rx="8" ry="8"/><rect x="200" y="200" width="112" height="112" rx="8" ry="8"/><rect x="352" y="200" width="112" height="112" rx="8" ry="8"/><rect x="48" y="352" width="112" height="112" rx="8" ry="8"/><rect x="200" y="352" width="112" height="112" rx="8" ry="8"/><rect x="352" y="352" width="112" height="112" rx="8" ry="8"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "apps-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Apps Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

