import AddTeamMemberModal from '../AddTeamMemberModal'
import TeamMember from '../TeamMember'

export default {
  name: 'TeamBuilder',
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
