<script lang="ts" setup>
import "virtual:svg-icons-register"
</script>

<template>
  <div>
    Layout: default
    <header>
      layout header
      <nuxt-link class="text-blue-500" to="/">Home</nuxt-link>
    </header>
    <slot />
    <footer>layout footer</footer>
  </div>
</template>

<style scoped></style>
