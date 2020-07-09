import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const initialState = {teamMembers: []}

export default new Vuex.Store({
  state: initialState,

  mutations: {
    ADD_TEAM_MEMBER(state, payload) {
      state.teamMembers.push(payload)
    },
    REMOVE_TEAM_MEMBER(state, id) {
      const index = state.teamMembers.findIndex(teamMember => teamMember.id === id)
      state.teamMembers.splice(index, 1)
    },
    SET_TEAM_MEMBERS(state, payload) {
      state.teamMembers = payload
    }
  },

  actions: {
    fetchTeamMembers({commit}) {
      axios.get('http://localhost:3000/team_members')
        .then((response) => {
          commit("SET_TEAM_MEMBERS", response.data)
        })
    },
    addTeamMember({commit}, teamMember) {
      axios.post('http://localhost:3000/team_members', teamMember)
        .then((res) => {
          commit("ADD_TEAM_MEMBER", res.data)
        })
    },
    removeTeamMember({commit}, teamMember) {
      axios.delete(`http://localhost:3000/team_members/${teamMember.id}`)
        .then(() => {
          commit("REMOVE_TEAM_MEMBER", teamMember.id)
        })
    }
  }
});
