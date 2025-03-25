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
    customStyle="bg-[#DDA15E]"
  />
  <ProjectComponent
    href="https://weather-app-jakubhajduk53s-projects.vercel.app/"
    name="Weather App"
    description="Check the weather at any location"
    :icon="PartlyCloudy"
    customStyle="bg-[#BC6C25]"
  />
  <ProjectComponent
    href="https://to-do-app-2025.vercel.app/"
    name="Todo App"
    description="Fill the list with your todo's"
    :icon="List"
    customStyle="bg-[#606C38]"
  />
</template>

<style scoped></style>
