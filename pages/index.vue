<script lang="ts" setup>
import Btn from "@theme/Btn.vue"
// const { count, addCount } = useAddCount()

const { $hello } = useNuxtApp()

const store = useHomeStore()

const selectedDate = ref(new Date())

const getApiData = async () => {
  await fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <nuxt-link to="/user">user</nuxt-link>
  <h1>首頁: {{ store.count }}</h1>
  <button @click="getApiData">get api data</button>
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
