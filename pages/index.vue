<script lang="ts" setup>
import Btn from "@theme/Btn.vue"
// const { count, addCount } = useAddCount()
const { data } = await useFetch("https://opentdb.com/api.php?amount=3")

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
    </div>
    <h1>首頁: {{ store.count }}</h1>
    <div class="w-6/12">{{ data }}<br /></div>
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
