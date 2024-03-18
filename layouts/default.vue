<script lang="ts" setup>
import "virtual:svg-icons-register"

// gsap
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
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
    </header>
    <slot />
    <footer>layout footer</footer>
  </div>
</template>

<style scoped></style>
