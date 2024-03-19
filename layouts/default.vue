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
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#f00" :height="10" :throttle="0">
      <p>Loading...</p>
    </NuxtLoadingIndicator>
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
