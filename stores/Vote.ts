import { defineStore } from "pinia"

export const useVoteStore = defineStore("vote", () => {
  const voteData = ref({})
  const setVoteData = (data: any) => {
    voteData.value = data
    console.log("voteData: ", data)
  }
  return { voteData, setVoteData }
})
