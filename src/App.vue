<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import ProjectsList from "./components/ProjectsList.vue";

const darkmode = ref<boolean>(false);

onMounted(() => {
  if (darkmode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

watch(darkmode, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>

<template>
  <div
    class="flex flex-col min-h-full dark:bg-[hsl(211,53%,11%)] dark:text-[hsl(75,6%,87%)]"
  >
    <header class="w-full h-4 bg-[hsl(52,10%,15%)]"></header>
    <nav class="flex items-center justify-end m-3 gap-3">
      <a
        href="https://www.linkedin.com/in/jakub-hajduk-ab0122286/"
        class="flex items-center justify-center gap-5 outline-2 rounded-full size-6 md:size-8 hover:cursor-pointer opacity-80"
      >
        <i class="bx bxl-linkedin-square text-xl md:text-2xl"></i>
      </a>
      <a
        href="https://github.com/jakubhajduk53"
        class="flex items-center justify-center gap-5 outline-2 rounded-full size-6 md:size-8 hover:cursor-pointer opacity-80"
      >
        <i class="bx bxl-github text-xl md:text-2xl"></i>
      </a>
      <button
        aria-label="darkmode"
        class="flex items-center justify-center gap-5 outline-2 rounded-full size-6 md:size-8 hover:cursor-pointer opacity-80 dark:text-yellow-400"
        @click="
          () => {
            darkmode = !darkmode;
          }
        "
      >
        <i class="bx bx-moon text-xl md:text-2xl"></i>
      </button>
    </nav>
    <main class="flex flex-1 flex-col justify-center items-center">
      <section class="flex flex-col text-center p-3">
        <p class="text-3xl md:text-5xl font-bold mb-1">Jakub Hajduk</p>
        <p class="text-xl md:text-3xl font-[500] mb-3 font-montserrat">
          Front-end developer
        </p>
        <p class="text-base md:text-xl w-[20em] md:w-[35em] font-montserrat">
          A 22-year-old student and Vue.js enthusiast with interests in sports,
          IT, and mechatronics. Chess player. Programming since 2019.
        </p>
      </section>
      <section
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-9/10 max-w-full h-full gap-3 m-5 justify-items-center"
      >
        <ProjectsList class="max-h-full" />
      </section>
    </main>
  </div>
</template>

<style scoped></style>
