<template>
  <div class="relative border-b-2 focus-within:border-blue-500">
    <input
      class="block w-full appearance-none focus:outline-none bg-transparent"
      type="text"
      placeholder=" "
      v-mask="mask"
      :name="name"
      :id="name"
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label :for="name" class="absolute top-0 -z-1 duration-300 origin-0">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    label: String,
    required: Boolean,
    mask: String,
    modelValue: String
  },
}
</script>