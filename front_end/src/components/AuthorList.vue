<script setup>
import { RouterLink } from "vue-router";

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
      <RouterLink :to="{ name: 'author', params: {username: author.user.username}}">
      {{ author.user.username }}
    </RouterLink>
    </li>
  </ol>
</template>