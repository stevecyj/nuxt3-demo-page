<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
})
</script>

<template>
  <div>
    <nuxt-link to="/">home</nuxt-link>
    <h1>user</h1>
  </div>
</template>

<style scoped></style>
