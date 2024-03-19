// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

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
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: 'icon-[dir]-[name]',
        customDomId: '__svg__icons__dom__',
      }),
    ],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['h1'].some(substring => tag.includes(substring)),
    },
  },

  css: ["~/assets/scss/main.scss", "~/assets/scss/gsap.scss"],
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
      {
        path: "~/components/GSAP",
        global: true,
      },
    ],
  },
  imports: {
    dirs: ["stores"],
  },
  modules: ["@pinia/nuxt"],
  alias: {
    "@theme": "../themes/10",
    "@helpers": "../helpers"
  },
  devServer: {
    port: 3001,
  },
});
