<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle">
      {{model.category}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <li class="item"
        v-for="item in model.items">
        {{item.title}}
      </li>
    </ul>
  </li>
</template>
<script>
  export default {
    props: {
      model: Object
    },
    data: function () {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.model.items &&
          this.model.items.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    }
  }
</script>
<style>

</style>
