<script lang="ts" setup>
import AboutHeader from "@/components/About/Header.vue"
import AboutFooter from "@/components/About/Footer.vue"
</script>

<template>
  <AboutHeader />
  <h1>about</h1>

  <NuxtLink class="px-5" to="/about">about index</NuxtLink>
  <NuxtLink class="px-5" to="/about/a">about A</NuxtLink>
  <NuxtLink class="px-5" to="/about/b">about B</NuxtLink>

  <main>
    <NuxtPage />
  </main>
  <AboutFooter />
</template>

<style scoped></style>
