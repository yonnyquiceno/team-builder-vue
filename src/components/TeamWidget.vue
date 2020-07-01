<template>


<div class="shadowed-box">
  <div class="box-header">
    <div class="row">
      <div class="col-sm-7">
        <span>YOUR TEAM</span>
        <span class="ml-1">({{teamMembers.length}})</span>
      </div>

      <div class="col-sm-5 text-right">
        <a v-b-modal.add-member-modal class="text-primary">
          <b-icon-person-plus-fill class="mr-2"></b-icon-person-plus-fill>
          ADD NEW USER
        </a>
      </div>
    </div>
  </div>

  <div class="row box-content">
    <div class="col-sm-4" v-for="(teamMember, index) in teamMembers" :key="index + teamMember.name">
      <TeamMember :user="teamMember" class="mb-3"></TeamMember>
    </div>
  </div>

  <AddTeamMemberModal></AddTeamMemberModal>
</div>

</template>

<script>
  import AddTeamMemberModal from './AddTeamMemberModal'
  import TeamMember from './TeamMember'
  export default {
    name: 'TeamWidget',
    components: { AddTeamMemberModal, TeamMember },
    computed: {
      teamMembers () {
        return this.$store.state.teamMembers
      }
    },
    created: function () {
      this.$store.dispatch("fetchTeamMembers")
    },
    methods: {
      addTeamMember: function (teamMember) {
        this.$store.dispatch('addTeamMember', teamMember)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .shadowed-box {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, .1);
    position: relative;
    min-height: 70px;
    border-radius: 8px;
    background-color: white;
  }

  .box-header {
    padding: 20px 30px;
    border-radius: 8px 8px 0 0;
    background-color: #f9f9f9;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
  }

  .box-content {
    padding: 30px;
  }

</style>
