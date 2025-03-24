<script setup lang="ts">
import { ElIcon } from "element-plus";
import { TopRight } from "@element-plus/icons-vue";
import type { Project } from "../interfaces/interfaces";

defineProps<Project>();
</script>

<template>
  <div class="flex justify-between w-1/4 m-1 rounded-2xl shadow-xl p-5 border">
    <div>
      <div class="flex gap-1 text-lg">
        <p>{{ name }}</p>
        <el-icon size="30"><component :is="icon" /></el-icon>
      </div>
      <div>{{ description }}</div>
    </div>
    <a
      target="_blank"
      :href="href"
      class="flex items-center justify-center border w-8 h-8 rounded-full shadow-xl"
    >
      <el-icon><TopRight /></el-icon
    ></a>
  </div>
</template>

<style scoped></style>
