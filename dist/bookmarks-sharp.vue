<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="bookmarks-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M112 0v48h304v368l48 32V0H112z"/><path d="M48 80v432l168-124 168 124V80H48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bookmarks-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Bookmarks Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

