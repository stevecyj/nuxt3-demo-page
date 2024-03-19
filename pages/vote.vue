<script lang="ts" setup>
import VoteCard from "@/components/Vote/VoteCard.vue"

const store = useVoteStore()
await useAsyncData("vote", async () => {
  const data = await $fetch("https://vue-lessons-api.vercel.app/vote/list")
  store.setVoteData(data)
  return data
})
</script>

<template>
  <div>
    <h1>vote</h1>
    <div class="flex">
      <VoteCard />
    </div>
  </div>
</template>

<style scoped></style>
