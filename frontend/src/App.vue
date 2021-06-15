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

export default {
  components: { RegisterForm, IndexTable, UpdateForm },

  data() {
    return {
      records: [],
      record: Object,
      isUpdating: false,
    };
  },

  methods: {
    saveData(form) {
      this.records.push(form);
    },

    updateData(record) {
      this.records[record.index] = record;
      this.isUpdating = false;
    },

    deleteRecord(index) {
      this.records = this.records.filter((record, i) => i !== index);
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
