import { createStore } from 'vuex';
import Person from '../models/Person';
import axios from '../api.js';


export default createStore({
    state: {
        persons: Array,
    },

    getters: {
        persons: state => state.persons,
        getPersonById: state => id => {
            return state.persons.find(person => person.id === id);
        }
    },

    mutations: {
        loadPersons(state, persons) {
            state.persons = persons;
        },

        addPerson(state, person) {
            state.persons.unshift(person);
        },

        updatePerson(state, person) {

        },

        removePerson(state, id) {
            state.persons = state.persons
                .filter(person => person.id !== id);
        }
    },

    actions: {
        fetchPersons({ commit }) {
            axios.get("/api/pessoas")
                .then(response => {
                    const persons = response.data
                        .map(person => Person.fromResponse(person));

                    commit('loadPersons', persons);
                })
                .catch(error => {
                    console.log(error.response);
                });
        },

        createPerson({ commit }, person) {
            axios.post("/api/pessoas", person.toJSON())
                .then(response => {
                    commit('addPerson', Person.fromResponse(response.data));
                })
                .catch(error => {
                    console.log(error.response);
                });
        },

        updatePerson({ commit }, person) {
            axios.put(`/api/pessoas/${this.person.id}`, person.toJSON())
                .then(reponse => {
                    commit('updatePerson', Person.fromResponse(response.data));
                })
                .catch(error => {
                    console.log(error.response);
                });
        },

        deletePerson({ commit }, id) {
            axios.delete(`/api/pessoas/${id}`)
              .then(response => {
                commit('removePerson', response.data.id);
              })
              .catch(error => {
                console.log(error.response);
              })
        },
    }
});