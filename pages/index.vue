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

// env
//const config = useRuntimeConfig()
//console.log("client config: ", config.public)

//if (process.server) {
//console.log("server token: ", config.token)
//}

// vite env
console.log("ENV =====> ", process.env.ENV)
console.log("WEB_URL =====> ", process.env.WEB_URL)
// console.log("process =====> ", process.env)

// 加油站 openData
onMounted(async () => {
  const response = await $fetch("/openData/5typeservicestn")
  console.log("加油站 =====> ", response)
})
</script>

<template>
  <div class="flex flex-col items-start ml-16">
    <div class="flex">
      <NuxtLink class="mr-5 text-blue-500" to="/user">user</NuxtLink>
      <NuxtLink class="mr-5 text-blue-500" to="/about">about</NuxtLink>
      <NuxtLink
        class="mr-5 text-blue-500"
        to="https://google.com"
        target="_blank"
        external
        >google</NuxtLink
      >
      <NuxtLink class="mr-5 text-blue-500" to="/async-data"
        >async data</NuxtLink
      >
      <NuxtLink class="mr-5 text-blue-500" to="/many-fetch"
        >many fetch</NuxtLink
      >
      <NuxtLink class="mr-5 text-blue-500" to="/tailwind">tailwind</NuxtLink>
      <NuxtLink class="mr-5 text-blue-500" to="/courses">courses</NuxtLink>
      <NuxtLink class="mr-5 text-blue-500" to="/vote">vote</NuxtLink>
      <NuxtLink class="mr-5 text-blue-500" to="/gsap">gsap</NuxtLink>
    </div>
    <div>
      <h1>i18n</h1>
      <div>
        <NuxtLink class="mr-5 text-blue-400" to="/">{{
          $t("front_page")
        }}</NuxtLink>
        <NuxtLink class="mr-5 text-blue-400" to="/">{{
          $t("about_us")
        }}</NuxtLink>
        <NuxtLink class="mr-5 text-blue-400" to="/">{{
          $t("contact_us")
        }}</NuxtLink>
        <NuxtLink class="mr-5 text-blue-400" to="/">{{
          $t("product_description")
        }}</NuxtLink>
        <NuxtLink class="mr-5 text-blue-400" to="/">{{
          $t("latest_news")
        }}</NuxtLink>
        <NuxtLink class="mr-5 text-blue-400" to="/">{{
          $t("history")
        }}</NuxtLink>
      </div>
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
