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
    submitUpdatEntity(event) {
      this.$emit("submit:update_entity", this.entity);
    },
  },
};
</script>