<script lang="ts" setup>
const [{ data: dog }, { data: cat }] = await Promise.all([
  useFetch("https://dog.ceo/api/breeds/image/random", { lazy: true }),
  useFetch("https://api.thecatapi.com/v1/images/search", { lazy: true }),
])
</script>

<template>
  <div>
    <h1>many fetch</h1>
    <pre>{{ dog }}</pre>
    <pre>{{ cat }}</pre>
  </div>
</template>

<style scoped></style>
