<template>
  <div class="container mx-auto">
    <h1 class="text-2xl text-center mb-10">Cadastro de pessoas</h1>
    <register-form v-if="!isUpdating" @submit:new_register="saveData" />
    <update-form
      v-if="isUpdating"
      :record="record"
      @submit:update_register="updateData"
    />
    <index-table
      :records="records"
      v-if="records.length > 0 && !isUpdating"
      @delete:record="deleteRecord"
      @update:record="showUpdateForm"
    />
  </div>
</template>

<script>
import RegisterForm from "./components/RegisterForm.vue";
import IndexTable from "./components/IndexTable.vue";
import UpdateForm from "./components/UpdateForm.vue";
import axios from "axios";

const http = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

// MUDE PARA TRUE PARA USAR A INTEGRAÇÃO COM O LARAVEL
const useAPI = false;

export default {
  components: { RegisterForm, IndexTable, UpdateForm },

  data() {
    return {
      records: [],
      record: Object,
      isUpdating: false,
    };
  },

  mounted() {
    if (useAPI) {
      http
        .get("/api/pessoas")
        .then((result) => {
          this.records = result.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  },

  methods: {
    saveData(form) {
      if (useAPI) {
        return http
          .post("/api/pessoas", form)
          .then((result) => {
            this.records = result.data;
          })
          .catch((error) => {
            console.log(error.response);
          });
      }

      this.records.push(form);
    },

    updateData(record) {
      if (useAPI) {
        return http
          .put(`/api/pessoas/${record.id}`, record)
          .then(result => {
            this.records = result.data;
            this.isUpdating = false;
          })
          .catch(error => {
            console.log(error.response);
          })
      }
      this.records[record.index] = record;
      this.isUpdating = false;
    },

    deleteRecord(record) {
      if (useAPI) {
        return http
          .delete(`/api/pessoas/${record.id}`, record)
          .then(result => {
            this.records = result.data;
          })
          .catch(error => {
            console.log(error.response);
          })
      }
      this.records = this.records.filter((record) => record !== record);
    },

    showUpdateForm(index) {
      this.record = this.records[index];
      this.record.index = index;
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
