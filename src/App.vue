<script setup lang="ts">
import { ElIcon } from "element-plus";
import { Moon } from "@element-plus/icons-vue";
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
    className="flex flex-col box-border h-screen dark:bg-gray-800 dark:text-white"
  >
    <nav className="flex justify-between p-5">
      <div className="text-3xl">Jakub Hajduk 2025</div>
      <div
        className="flex gap-5  outline-2 rounded-full p-1 hover:cursor-pointer select-none"
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
      <section className="flex flex-col text-center mt-5 gap-3">
        <p className="text-5xl">Jakub Hajduk</p>
        <p className="text-3xl">Front-end developer</p>
        <p className="text-xl">
          A 22-year-old student and Vue.js enthusiast with interests in sports,
          IT, and mechatronics. Chess player. Programming since 2019.
        </p>
      </section>
      <section className="flex gap-5 mt-5 justify-center"></section>
      <section className="flex gap-5 mt-5 justify-center">
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
