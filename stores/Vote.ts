import { defineStore } from "pinia"

export const useVoteStore = defineStore("vote", () => {
  const voteData = ref({})
  const setVoteData = (data: any) => {
    voteData.value = data
    console.log("voteData: ", data)
  }

  const addVote = async (type: string) => {
    const data = await $fetch("https://vue-lessons-api.vercel.app/vote/add", {
      method: "POST",
      body: { type },
    })
    voteData.value = data as {}
    console.log("addVote =====> ", data)
  }
  return { voteData, setVoteData, addVote }
})
