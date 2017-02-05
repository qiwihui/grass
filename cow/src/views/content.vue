<template>
  <div class="detail">
  <div class="operation">
    <div class="refresh">refresh</div>
  </div>
  <div class="detail-list">
    <div v-for="entry in entries">
      {{ entry.title }}
    </div>
  </div>
    </div>
</template>
<script>
  export default {
    name: 'content',
    data () {
      return {
        entries: [
          {
            id: 'e1',
            title: 'e1',
            content: 'e1_title',
            unread: 1,
            origin: {
              url: 'hhh'
            }
          },
          {
            id: 'e2',
            title: 'e2',
            content: 'e2_title',
            unread: 1,
            origin: {
              url: 'hhh'
            }
          },
          {
            id: 'e3',
            title: 'e3',
            content: 'e3_title',
            unread: 1,
            origin: {
              url: 'hhh'
            }
          }
        ]
      }
    }
  }
</script>
<style scoped>

</style>
