<template>
  <form action="" method="post" class="container">
    <div class="grid grid-cols-2 gap-8">
      <!-- Nome -->
      <text-input
        name="first_name"
        label="Nome"
        @update:first_name="setFirstName"
      />
      <!-- /Nome -->

      <!-- Sobrenome -->
      <text-input
        name="last_name"
        label="Sobrenome"
        @update:last_name="setLastName"
      />
      <!-- /Sobrenome -->
    </div>

    <div class="grid grid-cols-2 gap-5 mt-8">
      <!-- E-mail -->
      <email-input name="email" label="E-mail" @update:email="setEmail" />
      <!-- /E-mail -->

      <!-- Telefone -->
      <text-input
        name="phone"
        label="Telefone"
        mask="(##) #####-####"
        @update:phone="setPhone"
      />
      <!-- /Telefone -->
    </div>

    <div class="grid grid-cols-2 gap-5 mt-8">
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
        mask="###.###.###-##"
        @update:phone="setCPF"
      />
      <!-- /CPF -->

      <!-- CNPJ -->
      <text-input
        v-if="showCNPJ"
        name="cnpj"
        label="CNPJ"
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
import TextInput from "./form-inputs/TextInput.vue";
import EmailInput from "./form-inputs/EmailInput.vue";
import ToggleInput from "./form-inputs/ToggleInput.vue";
import SubmitButton from "./SubmitButton.vue";

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
  },

  computed: {
    isLegalEntity() {
      return this.form.isLegalEntity;
    },

    fullName() {
      return `${this.form.firstName} ${this.form.lastName}`;
    },
  },

  watch: {
    isLegalEntity(val) {
      this.showCNPJ = val === "true";
    },
  },
};
</script>