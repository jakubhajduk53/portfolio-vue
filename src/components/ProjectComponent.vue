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
      'flex flex-col w-9/10 font-montserrat shadow-[-5px_5px_0px_hsl(52,60%,84%)] dark:shadow-[-3px_3px_0px_hsl(211,53%,22%)] p-3 md:p-5 text-description-primary dark:text-description-dark-primary ',
    ]"
  >
    <div class="flex justify-between">
      <div>
        <div class="flex gap-1 text-base md:text-xl font-bold font-noto-serif">
          <p>{{ name }}</p>
          <el-icon size="30"><component :is="icon" /></el-icon>
        </div>
        <div class="text-sm md:text-base font-[500] font-noto-serif">
          {{ shortDescription }}
        </div>
      </div>
      <a
        aria-label="project site"
        target="_blank"
        :href="href"
        class="flex items-center justify-center size-6 md:size-8 rounded-full shadow-xl text-black bg-description-primary dark:bg-description-dark-primary"
      >
        <el-icon><TopRight /></el-icon
      ></a>
    </div>
    <hr class="text-description-tertiary dark:text-description-dark-tertiary" />
    <div class="flex flex-col gap-1 mt-1">
      <div
        class="indent-4 text-xs/7 md:text-sm/7 text-description-secondary dark:text-description-dark-secondary"
      >
        {{ description }}
      </div>
      <hr
        class="text-description-tertiary dark:text-description-dark-tertiary"
      />
      <p
        class="text-sm md:text-base text-description-secondary dark:text-description-dark-secondary"
      >
        Features:
      </p>
      <div
        v-for="feature in features"
        class="flex items-center gap-1 text-xs/6 md:text-sm/6 text-description-tertiary dark:text-description-dark-tertiary"
      >
        <el-icon><StarFilled /></el-icon>{{ feature }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
