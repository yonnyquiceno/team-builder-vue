<template>
  <b-modal id="add-member-modal" title="Add team member" @show="resetModal" @hidden="resetModal" @ok="handleOk">
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group :state="nameState" label="Name" label-for="name-input" invalid-feedback="Name is required">
        <b-form-input id="name-input" class="mb-3" placeholder="Full Name" v-model="teamMember.name" :state="nameState" required></b-form-input>
      </b-form-group>

      <b-form-group :state="jobTitleState" label="Job" label-for="name-input" invalid-feedback="Job Title is required">
        <b-form-input id="job_title-input" class="mb-3" placeholder="Job Title" v-model="teamMember.job_title" :state="jobTitleState" required></b-form-input>
      </b-form-group>
      
      <b-form-group :state="photoState" label="Photo" label-for="name-input" invalid-feedback="Photo is required">
        <b-form-input id="photo-input" class="mb-3" placeholder="Photo Url" v-model="teamMember.photo" :state="photoState" required></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
  export default {
    name: 'AddTeamMemberModal',
    data() {
      return {
        teamMember: {},
        nameState: false,
        jobTitleState: false,
        photoState: false
      }
    },
    methods: {
      addTeamMember: function (teamMember) {
        this.$store.dispatch('addTeamMember', teamMember)
      }, 
      checkFormValidity() {
        this.nameState = this.$refs.form[0].validity.valid
        this.jobTitleState = this.$refs.form[1].validity.valid
        this.photoState = this.$refs.form[2].validity.valid
        
        return this.$refs.form.checkValidity()
      },
      resetModal() {
        this.teamMember = {}
        this.jobTitleState = null
        this.photoState = null
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }

        this.addTeamMember(this.teamMember)
        
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('add-member-modal')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
