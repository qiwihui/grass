<template>
  <div class="top-bar">
    <div class="logo-container">
      <a class="logo">
        <h1 id="logo">
          <span>GRASS</span>
        </h1>
      </a>
    </div>
    <div class="search-container">
      <input class="search-input" type="text" title="&quot;search your feeds&quot;">
      <button class="search-button">
        <span>search</span>
      </button>
    </div>
    <div class="profile-container">
      <div class="name">
        <span>{{user_info.user_name}}</span>
      </div>
      <div class="avatar">
        <a class="image">
          <span>avatar</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'top-bar',
    data () {
      return {
      }
    },
    mounted: function () {
      this.$store.dispatch('GET_USER_INFO')
    },
    computed: {
      ...mapState([
        'user_info'
      ])
    }
  }
</script>
<style scoped>
  .logo-container {
    max-width:202px;
    min-width:202px;
  }
  .search-container {
    min-width: 135px;
  }
  .profile-container {
    min-width: 135px;
  }
</style>
