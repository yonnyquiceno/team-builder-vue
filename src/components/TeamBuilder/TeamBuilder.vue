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

<script src="./TeamBuilder.js"></script>
<style scoped src="./TeamBuilder.css"></style>
