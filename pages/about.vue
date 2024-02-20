<script lang="ts" setup>
import AboutHeader from "@/components/About/Header.vue"
import AboutFooter from "@/components/About/Footer.vue"

const { data } = await useFetch("/api/about", {
  pick: ["title", "description", "ogImage"],
})
console.log(data.value?.title)
let metaAbout = data.value

useServerSeoMeta({
  title: `${metaAbout?.title} - 金龍呈祥 福滿金沙`,
  description: `${metaAbout?.description} 金龍呈祥 福滿金沙`,
  ogDescription: "關於我們 金龍呈祥 福滿金沙",
  ogTitle: `${metaAbout?.title} - 金龍呈祥 福滿金沙`,
  ogImage: "",
  twitterCard: "summary_large_image",
  twitterSite: "",
  twitterCreator: "",
})

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
      async: true,
    },
  ],
})

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
