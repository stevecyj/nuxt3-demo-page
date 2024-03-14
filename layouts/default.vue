<script lang="ts" setup>
import "virtual:svg-icons-register"
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
