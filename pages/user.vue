<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
})

const { data } = await useFetch("/api/user", {
  pick: ["title", "description", "ogImage"],
  onRequest({ request, options }) {
    // 設置 request headers
    options.headers = {} as { [key: string]: string }
    options.headers.authorization = `Bearer token-your-token`
  },
  onResponse({ request, response, options }) {
    response._data.success = true
    console.log("response", response)
  },
})
const title = data.value?.title
const description = data.value?.description

console.log(data.value)
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </Head>
  <div>
    <nuxt-link to="/">home</nuxt-link>
    <h1>user</h1>
    <h2>
      {{ title }}
    </h2>
  </div>
</template>

<style scoped></style>
