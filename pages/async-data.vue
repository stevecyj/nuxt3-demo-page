<script lang="ts" setup>
const { data, pending, error } = await useAsyncData(
  "nuxt3test",
  () => $fetch("https://opentdb.com/api.php?amount=3"),
  { lazy: true }
)
</script>

<template>
  <div>
    <h1>useAsync</h1>
    <div class="w-6/12" v-if="pending">Loading ...</div>
    <div v-else-if="error" class="text-red-300">{{ error.message }}</div>
    <pre v-else>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
