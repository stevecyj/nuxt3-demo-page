<script lang="ts" setup>
import axios from "axios"

// const [{ data: dog }, { data: cat }] = await Promise.all([
//   useFetch("https://dog.ceo/api/breeds/image/random", { lazy: true }),
//   useFetch("https://api.thecatapi.com/v1/images/search", { lazy: true }),
// ])

// axios 1個 api
// const { data: dog } = await useAsyncData("axiosDog", async () => {
//   const res = await axios.get("https://dog.ceo/api/breeds/image/random")
//   console.log(res)
//   return res.data
// })

// axios 2個 api
const [{ data: dog }, { data: cat }] = await Promise.all([
  useAsyncData("axiosDog", async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random")
    console.log(res)
    return res.data
  }),
  useAsyncData("axiosCat", async () => {
    const res = await axios.get("https://api.thecatapi.com/v1/images/search")
    console.log(res)
    return res.data
  }),
])
</script>

<template>
  <div>
    <h1>many fetch</h1>
    <pre>{{ dog }}</pre>
    <pre>{{ cat }}</pre>
  </div>
</template>

<style scoped></style>
