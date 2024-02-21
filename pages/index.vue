<script lang="ts" setup>
import Btn from "@theme/Btn.vue"
// addCount 改從 store 取得
// const { count, addCount } = useAddCount()

const { uuid } = useUUID()
console.log("uuid", uuid())

const { data, pending, error } = await useFetch("https://opentdb.com/api.php", {
  query: { amount: 3 },
  key: "trivia",
  lazy: true,
})
console.log((data.value as { results: any[] })?.results.length)
// const itemCount = (data.value as { results: any[] })?.results.length
const itemCount = computed(
  () => (data.value as { results: any[] })?.results.length
)

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
  <div class="flex flex-col items-start ml-16">
    <div class="flex">
      <nuxt-link class="mr-5 text-blue-500" to="/user">user</nuxt-link>
      <nuxt-link class="mr-5 text-blue-500" to="/about">about</nuxt-link>
      <nuxt-link class="mr-5 text-blue-500" to="/async-data"
        >async data</nuxt-link
      >
      <nuxt-link class="mr-5 text-blue-500" to="/many-fetch"
        >many fetch</nuxt-link
      >
    </div>
    <h1>首頁: {{ store.count }}</h1>
    <div class="w-6/12" v-if="pending">Loading ...</div>
    <div v-else-if="error" class="text-red-300">{{ error.message }}</div>
    <div class="w-6/12" v-else>
      {{ data }}<br /><span
        >data counts: <span class="text-blue-500">{{ itemCount }}</span></span
      >
    </div>
    <button @click="getApiData">get api data</button>
    <h2>{{ $hello("Dio") }}</h2>
    <h2 v-timeformat="1708066023624"></h2>
    <VDatePicker v-model="selectedDate" />
    <br />
    <button @click="store.addCount">add</button>
    <Btn @click="store.addCount" />
    <Home />
    <Box />
    <h1 class="text-3xl text-blue-500 font-bold underline">Hello world!</h1>
  </div>
</template>

<style scoped></style>
