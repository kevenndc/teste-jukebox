<template>
  <form
    action=""
    method="post"
    class="container"
    @submit="submitForm"
  >
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- Nome -->
      <text-input
        name="first_name"
        label="Nome"
        :required="true"
        @update:first_name="setFirstName"
      />
      <!-- /Nome -->

      <!-- Sobrenome -->
      <text-input
        name="last_name"
        label="Sobrenome"
        :required="true"
        @update:last_name="setLastName"
      />
      <!-- /Sobrenome -->
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      <!-- E-mail -->
      <email-input name="email" label="E-mail" @update:email="setEmail" />
      <!-- /E-mail -->

      <!-- Telefone -->
      <text-input
        name="phone"
        label="Telefone"
        :required="true"
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
        @update:legal_entity="setIsLegalEntity"
      />
      <!-- /É pessoa jurídica? -->

      <!-- CPF -->
      <text-input
        v-if="!showCNPJ"
        name="cpf"
        label="CPF"
        :required="true"
        mask="###.###.###-##"
        @update:phone="setCPF"
      />
      <!-- /CPF -->

      <!-- CNPJ -->
      <text-input
        v-if="showCNPJ"
        name="cnpj"
        label="CNPJ"
        :required="true"
        mask="##.###.###/####-##"
        @update:phone="setCNPJ"
      />
      <!-- CNPJ -->
    </div>
    <div class="text-right mt-10">
      <submit-button text="Cadastrar pessoa" />
    </div>
  </form>
</template>
<script>
// Componentes
import TextInput from "./form-inputs/TextInput.vue";
import EmailInput from "./form-inputs/EmailInput.vue";
import ToggleInput from "./form-inputs/ToggleInput.vue";
import SubmitButton from "./SubmitButton.vue";

import { axios } from 'axios';

export default {
  components: {
    TextInput,
    EmailInput,
    ToggleInput,
    SubmitButton,
  },

  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        fullName: "",
        email: "",
        phone: "",
        isLegalEntity: false,
        cpf: "",
        cnpj: "",
      },

      showCNPJ: false,
    };
  },

  methods: {
    setFirstName(value) {
      this.form.firstName = value;
    },

    setLastName(value) {
      this.form.lastName = value;
    },

    setEmail(value) {
      this.form.email = value;
    },

    setPhone(value) {
      this.form.phone = value;
    },

    setIsLegalEntity(value) {
      this.form.isLegalEntity = value;
    },

    setCNPJ(value) {
      this.form.cnpj = value;
    },

    setCPF(value) {
      this.form.cpf = value;
    },

    submitForm(event) {
      event.preventDefault();
      this.$emit('submit:new_register', this.form);
    }
  },

  computed: {
    isLegalEntity() {
      return this.form.isLegalEntity;
    },

    fullName() {
      const fullName = `${this.form.firstName} ${this.form.lastName}`;
      return fullName;
    },
  },

  watch: {
    isLegalEntity(val) {
      this.showCNPJ = val === "true";
    },

    fullName(val) {
      this.form.fullName = val;
    },
  },
};
</script>