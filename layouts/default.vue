<script lang="ts" setup>
import "virtual:svg-icons-register"

//  useRoute & useRouter
// const route = useRoute()
// const { fullPath, hash, matched, meta, name, path, redirectedFrom } = route
const router = useRouter()
// onMounted(() => {
//   console.log("router =====> ", router)
// })
// router.beforeEach((to, from, next) => {
//   console.log("beforeEach", to, from)
//   console.log("router beforeEach route =====> ", {
//     hash,
//     matched,
//     meta,
//     name,
//     path,
//     redirectedFrom,
//   })

//   next()
// })

// 返回上一頁
const goBack = () => {
  router.go(-1)
}

// hook
const nuxtApp = useNuxtApp()
const isLoading = ref(false)
nuxtApp.hook("page:start", () => {
  isLoading.value = true
  console.log("isLoading: ", isLoading.value)
})
nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
  console.log("isLoading: ", isLoading.value)
})

// i18n
const { locale } = useI18n()
</script>

<template>
  <div>
    <!-- <NuxtLoadingIndicator color="#f00" :height="10" :throttle="0">
      <p>Loading...</p>
    </NuxtLoadingIndicator> -->
    <!-- custom loading -->
    <h1 class="text-blue-500" v-show="isLoading">Loading</h1>
    Layout: default
    <header>
      layout header
      <NuxtLink class="text-blue-500 pr-5" to="/">Home</NuxtLink>
      <button @click="goBack" class="text-blue-500 pr-5">Go Back</button>
      <select
        v-model="locale"
        required
        class="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
      >
        <option value="" disabled selected>切換語系</option>
        <option value="zh-US">英</option>
        <option value="ja-JP">日</option>
        <option value="zh-TW">中</option>
      </select>
    </header>
    <slot />
    <footer>layout footer</footer>
  </div>
</template>

<style scoped></style>
