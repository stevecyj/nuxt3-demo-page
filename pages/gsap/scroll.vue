<script lang="ts" setup>
import gsap from "gsap"
import transitionConfig from "@helpers/transitionConfig"
definePageMeta({
  pageTransition: transitionConfig,
})

const { transitionState } = useTransition()
const main = ref()
let ctx: gsap.Context

watch(
  () => transitionState.transitionComplete,
  (newValue) => {
    if (newValue) {
      ctx = gsap.context((self) => {
        const boxes = self.selector?.(".box")
        boxes.forEach((box: Element) => {
          gsap.to(box, {
            x: 150,
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top 20%",
              scrub: true,
            },
          })
        })
      }, main.value) // <- Scope!
    }
  }
)

onUnmounted(() => {
  ctx.revert() // <- Easy Cleanup!
})
</script>

<template>
  <div>
    <section class="section flex-center column blue">
      <h1>Basic ScrollTrigger in Nuxt3!</h1>
      <h2>Scroll down to see the magic happen!!</h2>
    </section>
    <div class="section flex-center column" ref="main">
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
    </div>
    <section class="section flex-center orange column">
      <h1>The End!</h1>
      <h2>
        For more information visit:&nbsp;
        <a
          href="https://greensock.com/scrolltrigger/"
          target="_blank"
          rel="noreferrer"
        >
          greensock.com/scrolltrigger/
        </a>
      </h2>
    </section>
  </div>
</template>

<style scoped></style>
