<script lang="ts" setup>
definePageMeta({
  middleware: (to, from) => {
    console.log("user =====> ", { to, from })
  },
})
</script>

<template>
  <div>
    <h1>user</h1>
  </div>
</template>

<style scoped></style>
