<template>
  <div class="nav">
    <div class="subscribe">
      <button class="subscribe">
        <span>SUBSCRIBE</span>
      </button>
    </div>
    <div class="tree">
      <tree
        v-for="model in subscriptions"
        :model="model">
      </tree>
    </div>
  </div>
</template>
<script>
  import tree from '../components/tree'
  export default {
    name: 'nav',
    data () {
      return {
        subscriptions: [
          {
            category: 'c1',
            items: [
              {
                id: 1,
                title: 'i1'
              },
              {
                id: 2,
                title: 'i2'
              }
            ]
          },
          {
            category: 'c1',
            items: [
              {
                id: 1,
                title: 'i1'
              },
              {
                id: 2,
                title: 'i2'
              }
            ]
          }
        ]
      }
    },
    components: {
      'tree': tree
    }
  }
</script>
<style scoped>

</style>
