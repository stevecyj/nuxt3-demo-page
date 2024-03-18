<script lang="ts" setup>
import CardList from "~/components/global/CardList.vue"

const { data } = await useFetch(
  "https://vue-lessons-api.vercel.app/courses/list"
)
</script>

<template>
  <div>
    <h1>courses list</h1>
    <CardList :courses="data as unknown[]" />
  </div>
</template>

<style scoped></style>
