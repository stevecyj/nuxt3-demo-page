<script lang="ts" setup></script>

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
