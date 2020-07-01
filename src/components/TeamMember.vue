<template>
  <div class="clear-panel">
    <div class="row">
      <div class="col-md-4">
        <div class="user-pic-container">
          <img class="user-pic" :src="user.photo"/>
        </div>
      </div>

      <div class="col-md-8">
        <div class="font-weight-bold"><a :href="user.photo" target="_blank">{{user.name}}</a></div>
        <div class="text-secondary">{{user.job_title || '&mdash;'}}</div>
        <div><b-link @click="removeUser">Remove User</b-link></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TeamMember',
    props: ['user'],
    methods: {
      removeUser: function() {
        this.$store.dispatch('removeTeamMember', this.user)
      }
    }
  }
</script>

<style scoped>
  .user-pic-container {
    height: 50px;
    width: 50px;
    margin-top: 5px;
    border-radius: 50%;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
  }

  .user-pic {
    height: 50px;
    filter: grayscale(100%) opacity(1);
    border-radius: 50%;
  }

  .clear-panel {
    padding: 15px 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    background-color: transparent;
    line-height: 20px;
  }

  a{
    color: #333;
  }
</style>
