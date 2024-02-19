// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      viewport: "width=500, initial-scale=1",
      title: "国民女神李若宁 宅男女神张云畅",
      meta: [
        {
          name: "description",
          content: "国民女神李若宁 宅男女神张云畅",
        },
        { property: "og:title", content: "国民女神李若宁 宅男女神张云畅" },
        { property: "og:url", content: "http://localhost:3000/" },
        {
          property: "og:description",
          content: "国民女神李若宁 宅男女神张云畅",
        },
      ],
    },
  },
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
    ],
  },
  imports: {
    dirs: ["stores"],
  },
  modules: ["@pinia/nuxt"],
  alias: { "@theme": "../themes/10" },
});
