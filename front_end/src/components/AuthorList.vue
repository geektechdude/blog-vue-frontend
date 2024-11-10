<script setup>

const props = defineProps({
  authors: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <ol>
    <li v-for="author in authors">
      {{ author.user.username }}
    </li>
  </ol>
</template>