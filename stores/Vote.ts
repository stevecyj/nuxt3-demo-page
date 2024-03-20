import { defineStore } from "pinia"

export const useVoteStore = defineStore("vote", () => {
  const voteData = ref({})
  const isFetch = ref(false)

  const setVoteData = (data: any) => {
    voteData.value = data
    console.log("voteData: ", data)
  }

  const addVote = async (type: string) => {
    if (isFetch.value) return
    // 資料回傳前，點擊按鈕無效
    isFetch.value = true

    try {
      const data = await $fetch("https://vue-lessons-api.vercel.app/vote/add", {
        method: "POST",
        body: { type },
      })
      voteData.value = data as {}
      alert("投票成功")
    } catch (error) {
      alert("投票失敗")
    } finally {
      isFetch.value = false
    }
  }
  return { voteData, isFetch, setVoteData, addVote }
})
