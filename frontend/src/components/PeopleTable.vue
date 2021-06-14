<template>
  <table>
    <thead>
      <th>Nome Completo</th>
      <th>E-mail</th>
    </thead>
    <tbody>
      <tr v-for="(record, index) in records" :key="index">
          <td>{{record}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      records: [],
    };
  },
};
</script>