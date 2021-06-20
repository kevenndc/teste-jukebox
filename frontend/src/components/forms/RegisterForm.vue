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
    submitNewEntity(event) {
      this.$emit("submit:new_entity", this.entity);
    },
  },
};
</script>