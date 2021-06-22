<template>
  <common-form
    submitLabel="Cadastrar Pessoa"
    :entity="entity"
    @submit:form="submitNewEntity"
  />
</template>
<script>
// Componentes
import CommonForm from "../forms/CommonForm.vue";
import Entity from "../../models/Entity";

export default {
  components: {
    CommonForm,
  },

  data() {
    return {
      entity: Entity.emptyEntity(),
    };
  },

  methods: {
    submitNewEntity() {

      let newEntity = this.entity;

        if (this.shouldUseAPI) {
          console.log('entrou')
          return this.axios
            .post("/api/pessoas", this.entity.toJSON())
              .then((result) => {
                newEntity = Entity.fromResponse(result.data);
              })
              .catch((error) => {
                console.log(error.response);
              });
        }

        this.$emit('update:new_entity', newEntity);
    },
  },
};
</script>