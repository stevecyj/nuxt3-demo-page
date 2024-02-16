<script lang="ts" setup>
import Btn from "@theme/Btn.vue"
// const { count, addCount } = useAddCount()

const { $hello } = useNuxtApp()

const store = useHomeStore()

const selectedDate = ref(new Date())
</script>

<template>
  <h1>首頁: {{ store.count }}</h1>
  <h2>{{ $hello("Dio") }}</h2>
  <h2 v-timeformat="1708066023624"></h2>
  <VDatePicker v-model="selectedDate" />
  <br />
  <button @click="store.addCount">add</button>
  <Btn @click="store.addCount" />
  <Home />
  <Box />
</template>

<style scoped></style>
