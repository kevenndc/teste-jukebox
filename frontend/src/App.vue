<template>
  <h1 class="text-2xl text-center mb-10">Cadastro de pessoas</h1>
  <div class="container mx-auto">
    <register-form />
  </div>
  
</template>

<script>
import { BeakerIcon } from "@heroicons/vue/solid";
import RegisterForm from './components/RegisterForm.vue';
export default {
  components: { BeakerIcon, RegisterForm },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
