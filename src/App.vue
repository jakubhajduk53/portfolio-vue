<script setup lang="ts">
import { ElIcon } from "element-plus";
import { Moon } from "@element-plus/icons-vue";
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
    class="flex flex-col h-full dark:bg-[#0D1B2A] dark:text-[#E0E1DD] bg-[#fefae0]"
  >
    <nav class="flex h-1/6 justify-between p-5">
      <div class="text-xl md:text-3xl">Jakub Hajduk 2025</div>
      <button
        class="flex items-center justify-center gap-5 outline-2 rounded-full size-8 md:size-10 hover:cursor-pointer select-none"
        @click="
          () => {
            darkmode = !darkmode;
          }
        "
      >
        <el-icon size="30"><Moon /></el-icon>
      </button>
    </nav>
    <main class="flex flex-1 flex-col items-center">
      <section class="flex flex-col text-center mt-5 gap-3">
        <p class="text-3xl md:text-5xl font-bold">Jakub Hajduk</p>
        <p class="text-xl md:text-3xl font-semibold">Front-end developer</p>
        <p class="text-base md:text-xl">
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
