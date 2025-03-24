<script setup lang="ts">
import { QuestionFilled, PartlyCloudy, List } from "@element-plus/icons-vue";
import ProjectComponent from "./ProjectComponent.vue";
</script>

<template>
  <ProjectComponent
    href="https://quiz-2025.vercel.app/"
    name="Quiz App"
    description="Answer 10 various trivia questions"
    :icon="QuestionFilled"
  />
  <ProjectComponent
    href="https://weather-app-jakubhajduk53s-projects.vercel.app/"
    name="Weather App"
    description="Check the weather at any location"
    :icon="PartlyCloudy"
  />
  <ProjectComponent
    href="https://to-do-app-2025.vercel.app/"
    name="Todo App"
    description="Fill the list with your todo's"
    :icon="List"
  />
</template>

<style scoped></style>
