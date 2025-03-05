<script setup lang="ts">
import { ElIcon, ElLink } from "element-plus";
import { Moon, QuestionFilled, PartlyCloudy } from "@element-plus/icons-vue";
import { onMounted, watch, ref } from "vue";

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
    class="flex flex-col box-border h-screen dark:bg-gray-800 dark:text-white"
  >
    <nav class="flex justify-between p-5">
      <div class="text-3xl">Jakub Hajduk 2025</div>
      <div
        class="flex gap-5 outline-2 rounded-full p-1 hover:cursor-pointer select-none"
        @click="
          () => {
            darkmode = !darkmode;
          }
        "
      >
        <el-icon size="30"><Moon /></el-icon>
      </div>
    </nav>
    <main>
      <section class="flex flex-col text-center mt-5 gap-3">
        <p class="text-5xl">Jakub Hajduk</p>
        <p class="text-3xl">Front-end developer</p>
        <p class="text-xl">
          A 22-year-old student and Vue.js enthusiast with interests in sports,
          IT, and mechatronics. Chess player. Programming since 2019.
        </p>
      </section>
      <section class="flex gap-5 mt-5 justify-center"></section>
      <section class="flex gap-5 mt-5 justify-center">
        <div class="flex flex-col items-center">
          <el-icon size="30"><QuestionFilled /></el-icon>
          <el-link target="_blank" href="https://quiz-2025.vercel.app/"
            >Quiz App
          </el-link>
        </div>
        <div class="flex flex-col items-center">
          <el-icon size="30"><PartlyCloudy /></el-icon>
          <el-link
            target="_blank"
            href="https://weather-app-jakubhajduk53s-projects.vercel.app/"
            >Weather App
          </el-link>
        </div>
        <el-link target="_blank">Project 3</el-link>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
