<template>
  <common-form
    submitLabel="Atualizar pessoa"
    :person="person"
    @submit:form="submitUpdatPerson"
  />

  {{ personId }}
</template>
<script>
// Componentes
import CommonForm from "../forms/CommonForm.vue";
import Person from "../../models/Person";

export default {
  components: {
    CommonForm,
  },

  props: {
    person: Person,
  },

  computed: {
    personId() {
      return this.$route.params;
    }
  },

  methods: {
    submitUpdatPerson() {

      let updatedperson = this.person;

      if (this.shoudUseAPI) {
        return this.axios
          .put(`/api/pessoas/${this.person.id}`, this.person.toJSON())
            .then(result => {
                updatedperson =  person.fromResponse(result.data);
            })
            .catch(error => {
              console.log(error.response);
            });
      }

      this.$emit("update:update_person", updatedperson);
    },
  },
};
</script>