<script lang="ts" setup>
import gsap from "gsap"
import transitionConfig from "@helpers/transitionConfig"

const main = ref()
let tl
let ctx: gsap.Context

definePageMeta({
  pageTransition: transitionConfig,
})

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector?.(".box")
    tl = gsap
      .timeline()
      .to(boxes[0], { x: 120, rotation: 360 })
      .to(boxes[1], { x: -120, rotation: -360 }, "<")
      .to(boxes[2], { y: -166 })
      .reverse()
  }, main.value) // <- Scope!
})

onUnmounted(() => {
  ctx.revert() // <- Easy Cleanup!
})
</script>

<template>
  <section class="boxes-container" ref="main">
    <h1>Use the button to toggle a Timeline</h1>
    <div>
      <button @click="">Toggle Timeline</button>
    </div>
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </section>
</template>
