<script lang="ts" setup>
import "virtual:svg-icons-register"

//  useRoute & useRouter
const route = useRoute()
const { fullPath, hash, matched, meta, name, path, redirectedFrom } = route
const router = useRouter()
onMounted(() => {
  console.log("router =====> ", router)
})
router.beforeEach((to, from, next) => {
  console.log("beforeEach", to, from)
  console.log("router beforeEach route =====> ", {
    hash,
    matched,
    meta,
    name,
    path,
    redirectedFrom,
  })

  next()
})
</script>

<template>
  <div>
    Layout: default
    <header>
      layout header
      <NuxtLink class="text-blue-500" to="/">Home</NuxtLink>
    </header>
    <slot />
    <footer>layout footer</footer>
  </div>
</template>

<style scoped></style>
