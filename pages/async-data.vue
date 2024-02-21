<script lang="ts" setup>
const { data, pending, error, refresh } = await useAsyncData(
  "nuxt3test",
  () => $fetch("https://opentdb.com/api.php?amount=3"),
  { lazy: true }
)

// const handleRefresh = () => {
//   refresh()
// }

const handleRefresh = () => {
  refreshNuxtData("nuxt3test")
}
</script>

<template>
  <div>
    <h1>useAsync</h1>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="handleRefresh"
    >
      Refresh
    </button>
    <div class="w-6/12" v-if="pending">Loading ...</div>
    <div v-else-if="error" class="text-red-300">{{ error.message }}</div>
    <pre v-else>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
