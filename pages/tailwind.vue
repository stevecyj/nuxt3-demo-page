<script lang="ts" setup></script>

<template>
  <div>
    <div className="flex flex-wrap overflow-hidden">
      <div
        className="w-full  sm:w-full  md:w-full  lg:w-full  xl:w-1/3 h-[100px] bg-blue-200"
      ></div>
      <div
        className="w-full  sm:w-full  md:w-full  lg:w-full  xl:w-1/3 h-[100px] bg-green-200"
      ></div>
      <div
        className="w-full  sm:w-full  md:w-full  lg:w-full  xl:w-1/3 h-[100px] bg-yellow-200"
      ></div>
    </div>
    <main>
      <div class="container mx-auto">
        <p class="bg-custom-color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          blanditiis aspernatur vel. Similique illum labore eaque tempora
          accusamus unde eius sint ad voluptate, autem facilis incidunt harum
          corporis facere, sapiente consectetur? Suscipit molestiae, expedita,
          sunt, corrupti hic dignissimos nesciunt ipsum voluptates dolorem
          soluta ut architecto sapiente ratione quidem iure facilis ab dolore
          incidunt quia? Quidem enim accusamus sapiente sed molestias neque
          assumenda, obcaecati natus. Dolor iure necessitatibus, cupiditate
          minima nesciunt tenetur animi sint debitis aliquid facere aliquam hic
          nemo odio repellendus aspernatur voluptates id at libero voluptas
          inventore doloribus eveniet magni sunt. Eveniet, dolorem distinctio.
          Quibusdam libero ipsam alias est iste nisi voluptas vitae, natus
          voluptate obcaecati tempora id labore!
        </p>
        <h6>hero icons</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        <h6>font awesome</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="w-6 h-6"
        >
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M459.1 52.4L442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-75.1 60.9-136 136-136h8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8z"
          />
        </svg>
        <h6>svg icon component</h6>
        <SvgIcon name="battery-0" :color="'#BFDBFE'" />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
