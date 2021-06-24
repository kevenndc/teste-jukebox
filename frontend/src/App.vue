<template>
  <div class="container mx-auto">
    <h1 class="text-2xl text-center mb-10">Cadastro de pessoas</h1>

    <div class="flex justify-between w-2/6 mx-auto">
      <router-link to="/create">
        <div class="flex flex-col items-center">
          <UserAddIcon class="w-20" />
          <p>Cadastrar pessoa</p>
        </div>
      </router-link>

      <router-link to="/index">
        <div class="flex flex-col items-center">
          <UserGroupIcon class="w-20" />
          <p>Ver pessoas cadastradas</p>
        </div>
      </router-link>
    </div>
    
    <div class="mt-14">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import { UserAddIcon, UserGroupIcon } from "@heroicons/vue/solid";
import RegisterForm from "./components/forms/RegisterForm.vue";
import IndexTable from "./components/IndexTable.vue";
import UpdateForm from "./components/forms/UpdateForm.vue";

export default {
  components: { 
    RegisterForm, 
    IndexTable, 
    UpdateForm,
    UserAddIcon,
    UserGroupIcon,
  },

  mounted() {
    if (this.shouldUseAPI) {
      return this.$store.dispatch('fetchPersons');
    }
  },
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
