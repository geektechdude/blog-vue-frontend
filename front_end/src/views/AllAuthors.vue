<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import AuthorList from "../components/AuthorList.vue";

const { result, loading, error } = useQuery(gql`
  query {
    allAuthors {
      user {
        username
      }
    }
  }
`);
</script>

<template>
  <h2>All Authors</h2>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error" class="warn"></div>
  <AuthorList v-else :authors="result.allAuthors" />
</template>

<style scoped>
  h2 {
    color: blue;
  }
</style>