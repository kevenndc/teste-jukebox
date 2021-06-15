<template>
  <form class="container" @submit.prevent="submitForm">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- Nome -->
      <text-input
        name="first_name"
        label="Nome"
        :required="true"
        :value="record.firstName"
        @update:first_name="setFirstName"
      />
      <!-- /Nome -->

      <!-- Sobrenome -->
      <text-input
        name="last_name"
        label="Sobrenome"
        :required="true"
        :value="record.lastName"
        @update:last_name="setLastName"
      />
      <!-- /Sobrenome -->
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      <!-- E-mail -->
      <email-input
        name="email"
        label="E-mail"
        @update:email="setEmail"
        :value="record.email"
      />
      <!-- /E-mail -->

      <!-- Telefone -->
      <text-input
        name="phone"
        label="Telefone"
        :required="true"
        :value="record.phone"
        mask="(##) #####-####"
        @update:phone="setPhone"
      />
      <!-- /Telefone -->
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      <!-- É pessoa jurídica -->
      <toggle-input
        name="legal_entity"
        label="É Pessoa Jurídica?"
        :value="record.isLegalEntity"
        @update:legal_entity="setIsLegalEntity"
      />
      <!-- /É pessoa jurídica? -->

      <!-- CPF -->
      <text-input
        v-if="!isLegalEntity"
        name="cpf"
        label="CPF"
        :required="true"
        :value="record.cpf"
        mask="###.###.###-##"
        @update:phone="setCPF"
      />
      <!-- /CPF -->

      <!-- CNPJ -->
      <text-input
        v-if="isLegalEntity"
        name="cnpj"
        label="CNPJ"
        :required="true"
        :value="record.cnpj"
        mask="##.###.###/####-##"
        @update:phone="setCNPJ"
      />
      <!-- CNPJ -->
    </div>
    <div class="text-right mt-10">
      <submit-button text="Atualizar pessoa" />
    </div>
  </form>
</template>
<script>
// Componentes
import TextInput from "./form-parts/TextInput.vue";
import EmailInput from "./form-parts/EmailInput.vue";
import ToggleInput from "./form-parts/ToggleInput.vue";
import SubmitButton from "./form-parts/SubmitButton.vue";

import { axios } from "axios";

export default {
  props: {
    record: Object,
  },
  components: {
    TextInput,
    EmailInput,
    ToggleInput,
    SubmitButton,
  },

  methods: {
    setFirstName(value) {
      this.record.firstName = value;
    },

    setLastName(value) {
      this.record.lastName = value;
    },

    setEmail(value) {
      this.record.email = value;
    },

    setPhone(value) {
      this.record.phone = value;
    },

    setIsLegalEntity(value) {
      this.record.isLegalEntity = value;
    },

    setCNPJ(value) {
      this.record.cnpj = value;
    },

    setCPF(value) {
      this.record.cpf = value;
    },

    submitForm(event) {
      this.$emit("submit:update_register", this.record);
      event.target.reset();
    },
  },

  computed: {
    isLegalEntity() {
      return this.record.isLegalEntity;
    },

    fullName() {
      const fullName = `${this.record.firstName} ${this.record.lastName}`;
      return fullName;
    },
  },

  watch: {
    fullName(val) {
      this.record.fullName = val;
    },
  },
};
</script>