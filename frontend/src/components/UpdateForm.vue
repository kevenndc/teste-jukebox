<template>
  <form class="container" @submit.prevent="submitForm">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- Nome -->
      <text-input
        name="first_name"
        label="Nome"
        :required="true"
        :value="record.nome"
        @update:first_name="setNome"
      />
      <!-- /Nome -->

      <!-- Sobrenome -->
      <text-input
        name="last_name"
        label="Sobrenome"
        :required="true"
        :value="record.sobrenome"
        @update:last_name="setSobrenome"
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
        name="telefone"
        label="Telefone"
        :required="true"
        :value="record.telefone"
        mask="(##) #####-####"
        @update:telefone="setTelefone"
      />
      <!-- /Telefone -->
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      <!-- É pessoa jurídica -->
      <toggle-input
        name="legal_entity"
        label="É Pessoa Jurídica?"
        :value="Boolean(record.pessoa_juridica)"
        @update:legal_entity="setPessoaJuridica"
      />
      <!-- /É pessoa jurídica? -->

      <!-- CPF -->
      <text-input
        v-if="!pessoaJuridica"
        name="cpf"
        label="CPF"
        :required="true"
        :value="record.cpf"
        mask="###.###.###-##"
        @update:cpf="setCPF"
      />
      <!-- /CPF -->

      <!-- CNPJ -->
      <text-input
        v-if="pessoaJuridica"
        name="cnpj"
        label="CNPJ"
        :required="true"
        :value="record.cnpj"
        mask="##.###.###/####-##"
        @update:cnpj="setCNPJ"
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
    setNome(value) {
      this.record.nome = value;
    },

    setSobrenome(value) {
      this.record.sobrenome = value;
    },

    setEmail(value) {
      this.record.email = value;
    },

    setTelefone(value) {
      this.record.telefone = value;
    },

    setPessoaJuridica(value) {
      this.record.pessoa_juridica = value;
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
    pessoaJuridica() {
      return this.record.pessoa_juridica;
    },

    nomeCompleto() {
      const nomeCompleto = `${this.record.nome} ${this.record.sobrenome}`;
      return nomeCompleto;
    },
  },

  watch: {
    nomeCompleto(val) {
      this.record.nome_completo = val;
    },
  },
};
</script>