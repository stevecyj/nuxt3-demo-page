<script lang="ts" setup>
const { count, addCount } = useAddCount()
</script>

<template>
  <h1>首頁: {{ count }}</h1>
  <button @click="addCount">add</button>
  <Home />
  <Box />
</template>

<style scoped></style>
