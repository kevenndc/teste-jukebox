<template>
  <common-form
    submitLabel="Atualizar pessoa"
    :entity="entity"
    @submit:form="submitUpdatEntity"
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

  props: {
    entity: Entity,
  },

  methods: {
    submitUpdatEntity() {

      let updatedEntity = this.entity;

      if (this.shoudUseAPI) {
        return this.axios
          .put(`/api/pessoas/${this.entity.id}`, this.entity.toJSON())
            .then(result => {
                updatedEntity =  Entity.fromResponse(result.data);
            })
            .catch(error => {
              console.log(error.response);
            });
      }

      this.$emit("update:update_entity", updatedEntity);
    },
  },
};
</script>