<script setup lang="ts">
import { ElIcon } from "element-plus";

defineProps<{
  href?: string;
  text?: string;
  icon?: typeof ElIcon;
}>();
</script>

<template>
  <div class="w-1/4 m-1 rounded-2xl shadow-xl">
    <a
      target="_blank"
      :href="href"
      class="flex flex-col items-center justify-center border w-28 h-28 rounded-full shadow-xl"
    >
      <el-icon size="30"><component :is="icon" /></el-icon>
      <div>{{ text }}</div>
    </a>
  </div>
</template>

<style scoped></style>
