<script lang="ts" setup>
import VoteCard from "@/components/Vote/VoteCard.vue"

const voteStore = useVoteStore()
const testStore = useTestStore()
await useAsyncData("vote", async () => {
  const data = await $fetch("https://vue-lessons-api.vercel.app/vote/list")
  voteStore.setVoteData(data)
  return data
})
</script>

<template>
  <div>
    <h1>vote</h1>
    <div>from voteStore: {{ voteStore.voteData }}</div>
    <div>from testStore: {{ testStore.voteToTestData }}</div>
    <div class="flex">
      <VoteCard />
    </div>
  </div>
</template>

<style scoped></style>
