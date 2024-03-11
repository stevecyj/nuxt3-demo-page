<template>
  <svg aria-hidden="true" :class="className">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#333",
  },
  className: {
    type: String,
    default: "w-6 h-6",
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style>
/* .svg-icon {
  width: 50%;
  height: 50%;
  max-width: 100px;
  max-height: 100px;
  fill: currentColor;
  overflow: hidden;
} */
</style>
