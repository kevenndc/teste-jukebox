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
        @update:first_name="setNome"
      />
      <!-- /Nome -->

      <!-- Sobrenome -->
      <text-input
        name="last_name"
        label="Sobrenome"
        :required="true"
        @update:last_name="setSobrenome"
      />
      <!-- /Sobrenome -->
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
      <!-- E-mail -->
      <email-input name="email" label="E-mail" @update:email="setEmail" />
      <!-- /E-mail -->

      <!-- Telefone -->
      <text-input
        name="telefone"
        label="Telefone"
        :required="true"
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
        @update:legal_entity="setPessoaJuridica"
      />
      <!-- /É pessoa jurídica? -->

      <!-- CPF -->
      <text-input
        v-if="!pessoaJuridica"
        name="cpf"
        label="CPF"
        :required="true"
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
        mask="##.###.###/####-##"
        @update:cnpj="setCNPJ"
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
import TextInput from "./form-parts/TextInput.vue";
import EmailInput from "./form-parts/EmailInput.vue";
import ToggleInput from "./form-parts/ToggleInput.vue";
import SubmitButton from "./form-parts/SubmitButton.vue";

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
        nome: "",
        sobrenome: "",
        nome_completo: "",
        email: "",
        telefone: "",
        pessoa_juridica: false,
        cpf: "",
        cnpj: "",
      },
    };
  },

  methods: {
    setNome(value) {
      this.form.nome = value;
    },

    setSobrenome(value) {
      this.form.sobrenome = value;
    },

    setEmail(value) {
      this.form.email = value;
    },

    setTelefone(value) {
      this.form.telefone = value;
    },

    setPessoaJuridica(value) {
      this.form.pessoa_juridica = value;
    },

    setCNPJ(value) {
      this.form.cnpj = value;
    },

    setCPF(value) {
      this.form.cpf = value;
    },

    submitForm(event) {
      this.$emit('submit:new_register', this.form);
      this.clearForm(event);
    },

    clearForm(event) {
      event.target.reset();
      this.form = {}
    }
  },

  computed: {
    pessoaJuridica() {
      return this.form.pessoa_juridica;
    },

    nomeCompleto() {
      const nomeCompleto = `${this.form.nome} ${this.form.sobrenome}`;
      return nomeCompleto;
    },
  },

  watch: {
    nomeCompleto(val) {
      this.form.nome_completo = val;
    },
  },
};
</script>