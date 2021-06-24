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
        v-model="person.firstName"
      />
      <!-- /Nome -->

      <!-- Sobrenome -->
      <text-input
        name="last_name"
        label="Sobrenome"
        :required="true"
        v-model="person.lastName"
      />
      <!-- /Sobrenome -->
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      <!-- E-mail -->
      <email-input name="email" label="E-mail" v-model="person.email" />
      <!-- /E-mail -->

      <!-- Telefone -->
      <text-input
        name="telefone"
        label="Telefone"
        :required="true"
        mask="(##) #####-####"
        v-model="person.phone"
      />
      <!-- /Telefone -->
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      <!-- É pessoa jurídica -->
      <toggle-input
        name="legal_person"
        label="É Pessoa Jurídica?"
        v-model="person.isLegalPerson"
      />
      <!-- /É pessoa jurídica? -->

      <!-- CPF -->
      <text-input
        v-if="!person.isLegalPerson"
        name="cpf"
        label="CPF"
        :required="true"
        mask="###.###.###-##"
        v-model="person.cpf"
      />
      <!-- /CPF -->

      <!-- CNPJ -->
      <text-input
        v-if="person.isLegalPerson"
        name="cnpj"
        label="CNPJ"
        :required="true"
        mask="##.###.###/####-##"
        v-model="person.cnpj"
      />
      <!-- CNPJ -->
    </div>
    <div class="text-right mt-10">
      <submit-button :text="submitLabel" />
    </div>
  </form>
</template>
<script>
import TextInput from "../form-parts/TextInput.vue";
import EmailInput from "../form-parts/EmailInput.vue";
import ToggleInput from "../form-parts/ToggleInput.vue";
import SubmitButton from "../form-parts/SubmitButton.vue";
import Person from "../../models/Person";

export default {
  components: {
    TextInput,
    EmailInput,
    ToggleInput,
    SubmitButton,
  },

  props: {
      person: Person,
      submitLabel: String,
  },

  methods: {
    submitForm(event) {
      this.$emit('submit:form', this.person);
      event.target.reset();
    },
  },

  computed: {
    nomeCompleto() {
      return `${this.person.firstName} ${this.person.lastName}`;
    },
  },

  watch: {
    nomeCompleto(val) {
      this.person.fullName = val;
    },
  },
}
</script>
