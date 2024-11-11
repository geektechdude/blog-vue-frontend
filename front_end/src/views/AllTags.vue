<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import TagList from "../components/TagList.vue";

const { result, loading, error } = useQuery(gql`
  query {
    allTags {
      name
  }
}
`);
</script>

<template>
  <h2>All Tags</h2>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error" class="warn"></div>
  <TagList v-else :blogTags="result.allTags" />
</template>

<style scoped>
  h2 {
    color: blue;
  }
</style>