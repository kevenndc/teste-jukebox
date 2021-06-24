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

        if (this.shouldUseAPI) {
          return this.$store.dispatch('createPerson', this.person);
        }

        this.$store.commit('addPerson', this.person);
    },
  },
};
</script>