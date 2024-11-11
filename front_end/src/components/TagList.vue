<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  blogTags: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <ol>
    <li v-for="blogTag in blogTags">
      <RouterLink :to="{ name: 'tag', params: {tag: blogTag.name}}">
      {{ blogTag.name }}
    </RouterLink>
    </li>
  </ol>
</template>