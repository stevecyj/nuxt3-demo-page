<script lang="ts" setup>
import AboutHeader from "@/components/About/Header.vue"
import AboutFooter from "@/components/About/Footer.vue"
const { data } = await useFetch("/api/about")
let metaAbout = data.value

useServerSeoMeta({
  title: `${metaAbout.title} 金龍呈祥 福滿金沙`,
  description: "關於我們 金龍呈祥 福滿金沙",
  ogDescription: "關於我們 金龍呈祥 福滿金沙",
  ogTitle: "關於我們 金龍呈祥 福滿金沙",
  ogImage: "",
  twitterCard: "summary_large_image",
  twitterSite: "",
  twitterCreator: "",
})

// useHead({
//   title: "關於我們 金龍呈祥 福滿金沙",
//   meta: [
//     { property: "og:title", content: "關於我們 金龍呈祥 福滿金沙" },
//     { property: "og:url", content: "http://localhost:3000/about" },
//     { property: "og:image", content: "http://localhost:3000/share.jpg" },
//     { name: "description", content: "關於我們 金龍呈祥 福滿金沙" },
//     {
//       property: "og:description",
//       content: "關於我們 金龍呈祥 福滿金沙",
//     },
//   ],
// })

// useSeoMeta({
//   title: "關於我們 金龍呈祥 福滿金沙",
//   description: "關於我們 金龍呈祥 福滿金沙",
//   ogDescription: "關於我們 金龍呈祥 福滿金沙",
//   ogTitle: "關於我們 金龍呈祥 福滿金沙",
//   ogImage: "",
//   twitterCard: "summary_large_image",
//   twitterSite: "",
//   twitterCreator: "",
// })
</script>

<template>
  <AboutHeader />
  <h1>about</h1>
  <AboutFooter />
</template>

<style scoped></style>
