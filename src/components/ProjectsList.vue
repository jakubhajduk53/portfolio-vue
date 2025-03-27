<script setup lang="ts">
import { QuestionFilled, PartlyCloudy, List } from "@element-plus/icons-vue";
import ProjectComponent from "./ProjectComponent.vue";

const quizFeatures = [
  "Modern Tech Stack: Developed using Vue 3 with the Composition API, TypeScript for type safety, and state management handled by Pinia.",
  "Smooth Navigation: Vue Router ensures seamless transitions between quiz pages.",
  "Responsive UI: Styled with TailwindCSS and Element Plus for a clean and user-friendly design.",
  "Instant Feedback: After completing the quiz, users receive their results, displaying both their selected answers and the correct ones.",
  "Color-Coded Results: Answers are highlighted with appropriate colors—green for correct responses and red for incorrect ones—making it easy to review mistakes.",
];

const weatherFeatures = [
  "Modern Tech Stack: Built with Vue 3 and TypeScript for a robust and scalable application.",
  "State Management: Pinia ensures smooth handling of user input and API responses.",
  "User-Friendly UI: Styled with TailwindCSS and Element Plus for a clean and intuitive experience.",
  "Comprehensive Weather Data: Displays essential details like temperature, humidity, and wind speed, along with advanced metrics like latitude and longitude.",
  "Live Search: Users can enter any location to instantly fetch the latest weather conditions.",
];

const todoFeatures = [
  "Modern Tech Stack: Vue 3 with TypeScript ensures a scalable and maintainable codebase.",
  "State Management: Pinia provides smooth task handling and reactivity.",
  "User-Friendly UI: Styled with TailwindCSS and Element Plus for a clean and intuitive experience.",
  "Task Table: All tasks are displayed in a structured table with inline editing and deletion options.",
  "Priority & Deadline Colors: Tasks are visually categorized based on priority and due date for better organization.",
];
</script>

<template>
  <ProjectComponent
    href="https://quiz-2025.vercel.app/"
    name="Quiz App"
    shortDescription="Answer 10 various trivia questions"
    description="This is a simple quiz application built with Vue 3, TypeScript, Pinia, Vue Router, Element Plus, and TailwindCSS. The app consists of 10 multiple-choice questions, each with only one correct answer, selected using radio buttons."
    :features="quizFeatures"
    :icon="QuestionFilled"
    customStyle="bg-[#DDA15E] dark:bg-[#415A77]"
    1B263B
  />
  <ProjectComponent
    href="https://weather-app-jakubhajduk53s-projects.vercel.app/"
    name="Weather App"
    shortDescription="Check the weather at any location"
    description="A weather application built with Vue 3, TypeScript, Pinia, Element Plus, and TailwindCSS. Users can search for any location to retrieve real-time weather data from the OpenWeatherMap API."
    :features="weatherFeatures"
    :icon="PartlyCloudy"
    customStyle="bg-[#BC6C25] dark:bg-[#1B263B]"
  />
  <ProjectComponent
    href="https://to-do-app-2025.vercel.app/"
    name="Todo App"
    shortDescription="Fill the list with your todo's"
    description="A task management application built with Vue 3, TypeScript, Pinia, Element Plus, and TailwindCSS. Users can add, edit, and delete tasks, organizing their workflow efficiently."
    :features="todoFeatures"
    :icon="List"
    customStyle="bg-[#606C38] dark:bg-[#778DA9]"
  />
</template>

<style scoped></style>
