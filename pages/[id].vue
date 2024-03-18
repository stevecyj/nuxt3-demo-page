<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div>
    {{ route.fullPath }}
  </div>
</template>

<style scoped></style>
