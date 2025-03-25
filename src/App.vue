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
    class="flex flex-col h-full dark:bg-gray-800 dark:text-white bg-[#fefae0]"
  >
    <nav class="flex h-1/5 justify-between p-5">
      <div class="text-3xl">Jakub Hajduk 2025</div>
      <button
        class="flex items-center justify-center gap-5 outline-2 rounded-full h-10 w-10 hover:cursor-pointer select-none"
        @click="
          () => {
            darkmode = !darkmode;
          }
        "
      >
        <el-icon size="30"><Moon /></el-icon>
      </button>
    </nav>
    <main class="flex flex-col h-4/5">
      <section class="flex flex-col text-center mt-5 gap-3">
        <p class="text-5xl">Jakub Hajduk</p>
        <p class="text-3xl">Front-end developer</p>
        <p class="text-xl">
          A 22-year-old student and Vue.js enthusiast with interests in sports,
          IT, and mechatronics. Chess player. Programming since 2019.
        </p>
      </section>
      <section class="w-full flex-1 box-border flex gap-5 mt-5 justify-center">
        <ProjectsList />
      </section>
    </main>
  </div>
</template>

<style scoped></style>
