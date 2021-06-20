<template>
  <form
    class="container"
    @submit.prevent="submitForm"
  >
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- Nome -->
      <text-input
        name="first_name"
        label="Nome"
        :required="true"
        v-model="entity.firstName"
      />
      <!-- /Nome -->

      <!-- Sobrenome -->
      <text-input
        name="last_name"
        label="Sobrenome"
        :required="true"
        v-model="entity.lastName"
      />
      <!-- /Sobrenome -->
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      <!-- E-mail -->
      <email-input name="email" label="E-mail" v-model="entity.email" />
      <!-- /E-mail -->

      <!-- Telefone -->
      <text-input
        name="telefone"
        label="Telefone"
        :required="true"
        mask="(##) #####-####"
        v-model="entity.phone"
      />
      <!-- /Telefone -->
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      <!-- É pessoa jurídica -->
      <toggle-input
        name="legal_entity"
        label="É Pessoa Jurídica?"
        v-model="entity.isLegalEntity"
      />
      <!-- /É pessoa jurídica? -->

      <!-- CPF -->
      <text-input
        v-if="!entity.isLegalEntity"
        name="cpf"
        label="CPF"
        :required="true"
        mask="###.###.###-##"
        v-model="entity.cpf"
      />
      <!-- /CPF -->

      <!-- CNPJ -->
      <text-input
        v-if="entity.isLegalEntity"
        name="cnpj"
        label="CNPJ"
        :required="true"
        mask="##.###.###/####-##"
        v-model="entity.cnpj"
      />
      <!-- CNPJ -->
    </div>
    <div class="text-right mt-10">
      <submit-button text="Cadastrar pessoa" />
    </div>
  </form>
</template>
<script>
import TextInput from "../form-parts/TextInput.vue";
import EmailInput from "../form-parts/EmailInput.vue";
import ToggleInput from "../form-parts/ToggleInput.vue";
import SubmitButton from "../form-parts/SubmitButton.vue";
import Entity from "../../models/Entity";

export default {
  components: {
    TextInput,
    EmailInput,
    ToggleInput,
    SubmitButton,
  },

  props: {
      entity: Entity
  },

  methods: {
    submitForm(event) {
      this.$emit('submit:form', this.entity);
      event.target.reset();
    },
  },

  computed: {
    nomeCompleto() {
      return `${this.entity.firstName} ${this.entity.lastName}`;
    },
  },

  watch: {
    nomeCompleto(val) {
      this.entity.fullName = val;
    },
  },
}
</script>
