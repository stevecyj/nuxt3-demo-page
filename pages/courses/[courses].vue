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
  </div>
</template>

<style scoped></style>
