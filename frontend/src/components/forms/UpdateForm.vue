<template>
  <common-form
    submitLabel="Atualizar pessoa"
    :person="person"
    @submit:form="submitUpdatedPerson"
  />
</template>
<script>
// Componentes
import CommonForm from "../forms/CommonForm.vue";

export default {
  components: {
    CommonForm,
  },

  beforeRouteUpdate(to, from) {
    this.person = this.$store.getters.getPersonById(to.params.id);
  },

  data() {
    return {
      person: this.$store.getters.getPersonById(this.$route.params.id),
    }
  },

  methods: {
    submitUpdatedPerson() {

      if (this.shoudUseAPI) {
        return this.$store.dispatch('updatePerson', this.person);
      }

      this.$store.commit('updatePerson', this.person);
    },
  },
};
</script>