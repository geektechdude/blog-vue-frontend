<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>GeekTechStuff Blog </h1>
      <nav>
        <RouterLink to="/">Posts</RouterLink>
        <RouterLink to="/allauthors">Author List</RouterLink>
        <RouterLink to="/alltags">Tag List</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
<body>
  <RouterView />
</body>
</template>

<style scoped>
  h1 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  header {
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
  }

  nav {
    text-align: center;
    margin: 1rem 0;
  }

  nav a {
    padding: 0.5rem;
  }
</style>