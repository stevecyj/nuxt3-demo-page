<script lang="ts" setup>
const { toggleTransitionComplete } = useTransition()
onMounted(() => {
  toggleTransitionComplete(true)
})
</script>

<template>
  <div class="gsap-section">
    <HeaderComponent />
    <!-- <h1>gsap</h1> -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
