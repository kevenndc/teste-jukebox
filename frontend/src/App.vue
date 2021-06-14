<template>
  <div class="container mx-auto">
    <h1 class="text-2xl text-center mb-10">Cadastro de pessoas</h1>
    <register-form @submit:new_register="saveData" />
    <people-table :records="records" />
  </div>
</template>

<script>
import RegisterForm from "./components/RegisterForm.vue";
import PeopleTable from "./components/PeopleTable.vue";

export default {
  components: { RegisterForm, PeopleTable },

  data() {
    return {
      records: [],
    }
  },

  methods: {
    saveData(form) {
      this.records.push(form);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
