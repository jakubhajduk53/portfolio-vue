<script setup lang="ts">
import { QuestionFilled, PartlyCloudy, List } from "@element-plus/icons-vue";
import ProjectComponent from "./ProjectComponent.vue";
</script>

<template>
  <ProjectComponent
    href="https://quiz-2025.vercel.app/"
    text="Quiz App"
    :icon="QuestionFilled"
  />
  <ProjectComponent
    href="https://weather-app-jakubhajduk53s-projects.vercel.app/"
    text="Weather App"
    :icon="PartlyCloudy"
  />
  <ProjectComponent
    href="https://to-do-app-2025.vercel.app/"
    text="Todo App"
    :icon="List"
  />
</template>

<style scoped></style>
