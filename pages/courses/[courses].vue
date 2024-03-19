<script lang="ts" setup>
const route = useRoute()
console.log("courses route =====> ", route)

const { data } = await useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.courses}`
)
</script>

<template>
  <div>
    {{ data }}
    <br />
    <NuxtLink
      class="px-5 text-blue-500"
      :to="`/courses/${route.params.courses}/`"
      >內頁介紹</NuxtLink
    >
    <NuxtLink
      class="px-5 text-blue-500"
      :to="`/courses/${route.params.courses}/A`"
      >A</NuxtLink
    >
    <NuxtLink
      class="px-5 text-blue-500"
      :to="`/courses/${route.params.courses}/B`"
      >B</NuxtLink
    >
    <NuxtLink
      class="px-5 text-blue-500"
      :to="`/courses/${route.params.courses}/C`"
      >C</NuxtLink
    >
    <br />
    <NuxtPage />
  </div>
</template>

<style scoped></style>
