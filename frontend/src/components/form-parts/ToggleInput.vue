<template>
  <label :for="name" class="flex items-center justify-between cursor-pointer">
    <span class="mr-3">
      {{ label }}
    </span>
    <div class="relative">
      <!-- input -->
      <input
        type="checkbox"
        class="sr-only toggle-input"
        :checked="modelValue"
        :value="modelValue"
        :name="name"
        :id="name"
        @change="$emit(`update:modelValue`, ($event.target.checked))"
      />
      <!-- linha -->
      <div class="block bg-gray-300 w-14 h-8 rounded-full"></div>
      <!-- ponto -->
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
  </label>
</template>
<script>
export default {
  props: {
    name: String,
    label: String,
    modelValue: Boolean,
  },
};
</script>