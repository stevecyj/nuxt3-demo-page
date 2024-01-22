<script lang="ts" setup>
// const { count, addCount } = useAddCount()

const { $hello } = useNuxtApp()

const store = useHomeStore()
</script>

<template>
  <h1>首頁: {{ store.count }}</h1>
  <h2>{{ $hello("Dio") }}</h2>
  <button @click="store.addCount">add</button>
  <Home />
  <Box />
</template>

<style scoped></style>
