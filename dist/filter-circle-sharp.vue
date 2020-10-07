<template>
  <div
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="filter-circle-sharp-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48 304h-96v-32h96zm48-64H160v-32h192zm32-64H128v-32h256z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "filter-circle-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Filter Circle Sharp Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

