<template>
  <div class="relative border-b-2 focus-within:border-blue-500">
    <input
      type="text"
      :name="name"
      :id="name"
      placeholder=" "
      :required="required"
      v-mask="mask"
      @input="$emit(`update:${name}`, $event.target.value)"
      class="block w-full appearance-none focus:outline-none bg-transparent"
      v-model="value"
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
    },

    data() {
      return {
        value: ''
      }
    }
}
</script>