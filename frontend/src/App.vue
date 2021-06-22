<template>
  <div class="container mx-auto">
    <h1 class="text-2xl text-center mb-10">Cadastro de pessoas</h1>
    <register-form v-if="!isUpdating" @update:new_entity="saveData" />
    <update-form
      v-if="isUpdating"
      :entity="entity"
      @update:update_entity="updateData"
    />
    <index-table
      v-if="entities.length > 0 && !isUpdating"
      :entities="entities"
      @delete:entity="deleteEntity"
      @update:entity="showUpdateForm"
    />
  </div>
</template>

<script>
import RegisterForm from "./components/forms/RegisterForm.vue";
import IndexTable from "./components/IndexTable.vue";
import UpdateForm from "./components/forms/UpdateForm.vue";
import Entity from "./models/Entity";


// MUDE PARA TRUE PARA USAR A INTEGRAÇÃO COM O LARAVEL
const useAPI = false;

export default {
  components: { RegisterForm, IndexTable, UpdateForm },

  data() {
    return {
      entities: [],
      entity: Entity,
      isUpdating: false,
    };
  },

  mounted() {
    if (useAPI) {
      this.axios
        .get("/api/pessoas")
          .then((result) => {
            result.data.forEach(entity => {
              this.entities.push(Entity.fromResponse(entity));
            });
          })
          .catch((error) => {
            console.log(error.response);
          });
    }
  },

  methods: {
    saveData(entity) {
      this.entities.unshift(entity);
    },

    updateData(entity) {

      if (this.shouldUseAPI) {
        return this.entities.map(item => {
          if (item.id === entity.id) {
            return entity;
          }
        });
      }
      
      this.entities[entity.index] = entity;
      this.isUpdating = false;
    },

    deleteEntity(entity) {

      if (useAPI) {
        return this.axios
          .delete(`/api/pessoas/${entity.id}`, entity)
            .then(result => {
              this.entities = this.entities.filter(item => item.id != result.data.id);
            })
            .catch(error => {
              console.log(error.response);
            })
      }

      this.entities = this.entities.filter((entity) => entity !== entity);
    },

    showUpdateForm(index) {
      this.entity = this.entities[index];
      this.entity.index = index;
      this.isUpdating = true;
    },
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
