<script setup lang="ts">
import { ElIcon } from "element-plus";
import { TopRight, StarFilled } from "@element-plus/icons-vue";
import type { Project } from "../interfaces/interfaces";

defineProps<Project>();
</script>

<template>
  <div
    :class="[
      customStyle,
      'flex flex-col w-1/4 shadow-xl rounded-2xl p-5 mb-5 text-[#fefae0] dark:text-[#E0E1DD]',
    ]"
  >
    <div class="flex justify-between">
      <div>
        <div class="flex gap-1 text-lg">
          <p>{{ name }}</p>
          <el-icon size="30"><component :is="icon" /></el-icon>
        </div>
        <div>{{ shortDescription }}</div>
      </div>
      <a
        target="_blank"
        :href="href"
        class="flex items-center justify-center w-8 h-8 rounded-full shadow-xl text-black bg-[#fefae0]"
      >
        <el-icon><TopRight /></el-icon
      ></a>
    </div>
    <div class="flex flex-col gap-1 mt-1">
      <div class="indent-4">{{ description }}</div>
      <p class="indent-4">Features:</p>
      <div
        v-for="feature in features"
        class="flex items-center gap-1 justify-center text-sm"
      >
        <el-icon><StarFilled /></el-icon>{{ feature }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
