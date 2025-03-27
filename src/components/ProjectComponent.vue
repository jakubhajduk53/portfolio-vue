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
      'flex flex-col w-9/10 shadow-xl rounded-2xl p-3 md:p-5 text-[#fefae0] dark:text-[#E0E1DD]',
    ]"
  >
    <div class="flex justify-between">
      <div>
        <div class="flex gap-1 text-base md:text-lg">
          <p>{{ name }}</p>
          <el-icon size="30"><component :is="icon" /></el-icon>
        </div>
        <div class="text-sm md:text-base">{{ shortDescription }}</div>
      </div>
      <a
        target="_blank"
        :href="href"
        class="flex items-center justify-center size-6 md:size-8 rounded-full shadow-xl text-black bg-[#fefae0]"
      >
        <el-icon><TopRight /></el-icon
      ></a>
    </div>
    <hr />
    <div class="flex flex-col gap-1 mt-1">
      <div class="indent-4 text-sm md:text-base">{{ description }}</div>
      <hr />
      <p class="text-sm md:text-base">Features:</p>
      <div
        v-for="feature in features"
        class="flex items-center gap-1 text-xs md:text-sm"
      >
        <el-icon><StarFilled /></el-icon>{{ feature }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
