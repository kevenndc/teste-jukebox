<template>
  <button
    type="submit"
    class="
      px-3
      py-2
      text-white
      font-bold
      bg-blue-500
      shadow-md
      transition-colors
      duration-300
      ease-in-out
      hover:bg-blue-800
    "
  >
    {{ text }}
  </button>
</template>
<script>
export default {
    props: {
        text: String
    }
}
</script>