<template>
  <div class="my-14">
    <h2 class="text-center text-2xl">Pessoas Cadastradas</h2>
    <table class="mx-auto my-12 text-left w-4/5">
      <thead>
        <th class="px-5">Nome Completo</th>
        <th class="px-5">E-mail</th>
        <th class="px-5 text-center">Ações</th>
      </thead>
      <tbody>
        <tr
          v-for="(entity, index) in entities"
          :key="index"
          class="border-b border-gray-500 last:border-0"
        >
          <td class="p-5 w-2/6">{{ entity.fullName }}</td>
          <td class="p-5 w-2/6">{{ entity.email }}</td>
          <td class="p-5 w-1/6">
            <div class="flex justify-between mx-auto">
              <span
                class="flex flex-col items-center text-red-500 cursor-pointer"
                @click="$emit('delete:entity', entity)"
              >
                <TrashIcon class="w-5 h-5" />
                Excluir
              </span>
              <span
                class="flex flex-col items-center text-blue-500 cursor-pointer"
                @click="$emit('update:entity', index)"
              >
                <PencilAltIcon class="w-5 h-5" />
                Atualizar
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { TrashIcon, PencilAltIcon } from "@heroicons/vue/solid";
export default {
  components: { TrashIcon, PencilAltIcon },

  props: {
    entities: Array,
  },
};
</script>