<template>
  <common-form
    submitLabel="Cadastrar Pessoa"
    :person="person"
    @submit:form="submitNewPerson"
  />
</template>
<script>
// Componentes
import CommonForm from "../forms/CommonForm.vue";
import Person from "../../models/Person";

export default {
  components: {
    CommonForm,
  },

  data() {
    return {
      person: new Person(),
    };
  },

  methods: {
    submitNewPerson() {
      const newPerson = this.person;
      this.person = new Person();

      if (this.shouldUseAPI) {
        return this.$store.dispatch('createPerson', newPerson);
      }

      this.$store.commit('addPerson', newPerson);
    },
  },
};
</script>