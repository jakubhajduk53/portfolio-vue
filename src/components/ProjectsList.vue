<script setup lang="ts">
import { QuestionFilled, PartlyCloudy, Grid } from "@element-plus/icons-vue";
import ProjectComponent from "./ProjectComponent.vue";

const quizFeatures = [
  "Modern Tech Stack: Developed using Vue 3 with the Composition API, TypeScript for type safety, and state management handled by Pinia.",
  "Smooth Navigation: Vue Router ensures seamless transitions between quiz pages.",
  "Responsive UI: Styled with TailwindCSS and Element Plus for a clean and user-friendly design.",
  "Instant Feedback: After completing the quiz, users receive their results, displaying both their selected answers and the correct ones.",
  "Color-Coded Results: Answers are highlighted with appropriate colors—green for correct responses and red for incorrect ones—making it easy to review mistakes.",
];

const quizDescription =
  "This is a simple quiz application built with Vue 3, TypeScript, Pinia, Vue Router, Element Plus, and TailwindCSS. The app consists of 10 multiple-choice questions, each with only one correct answer, selected using radio buttons.";

const weatherFeatures = [
  "Modern Tech Stack: Built with Vue 3 and TypeScript for a robust and scalable application.",
  "State Management: Pinia ensures smooth handling of user input and API responses.",
  "User-Friendly UI: Styled with TailwindCSS and Element Plus for a clean and intuitive experience.",
  "Comprehensive Weather Data: Displays essential details like temperature, humidity, and wind speed, along with advanced metrics like latitude and longitude.",
  "Live Search: Users can enter any location to instantly fetch the latest weather conditions.",
];

const weatherDescription =
  "A weather application built with Vue 3, TypeScript, Pinia, Element Plus, and TailwindCSS. Users can search for any location to retrieve real-time weather data from the OpenWeatherMap API.";

const uiFeatures = [
  "Custom Design System: Built with Vue 3 and TypeScript, offering a reusable and scalable UI component library.",
  "Dual Color Palettes: Includes separate light and dark HSL-based palettes for consistent theming across UI components.",
  "Button Components: Support multiple sizes, border styles, and one of seven predefined themes for visual variety.",
  "Utility-First Styling: TailwindCSS ensures rapid development with consistent spacing, typography, and responsive behavior.",
  "Consistent UX Patterns: Components follow predictable structure and interactions to provide a smooth user experience.",
];
const uiDescription =
  "A custom UI component library built with Vue 3, TypeScript, and TailwindCSS. Features a flexible HSL-based color system and a suite of interactive, accessible button components ready for integration in modern web apps.";
</script>

<template>
  <ProjectComponent
    href="https://quiz-2025.vercel.app/"
    name="Quiz App"
    shortDescription="Answer 10 various trivia questions"
    :description="quizDescription"
    :features="quizFeatures"
    :icon="QuestionFilled"
    customStyle="bg-linear-to-bl from-[hsl(32,15%,40%)] to-[hsl(32,15%,30%)] dark:from-[hsl(212,29%,36%)] dark:to-[hsl(212,29%,26%)]"
  />
  <ProjectComponent
    href="https://weather-app-jakubhajduk53s-projects.vercel.app/"
    name="Weather App"
    shortDescription="Check the weather at any location"
    :description="weatherDescription"
    :features="weatherFeatures"
    :icon="PartlyCloudy"
    customStyle="bg-linear-to-bl from-[hsl(28,57%,34%)] to-[hsl(28,57%,24%)] dark:from-[hsl(219,27%,36%)] dark:to-[hsl(219,27%,26%)]"
  />
  <ProjectComponent
    href="https://my-ui-jakubhajduk53s-projects.vercel.app/"
    name="MyUI"
    shortDescription="Build interfaces faster with custom-styled UI components"
    :description="uiDescription"
    :features="uiFeatures"
    :icon="Grid"
    customStyle="bg-linear-to-bl from-[hsl(74,32%,32%)] to-[hsl(74,32%,22%)] dark:from-[hsl(214,23%,36%)] dark:to-[hsl(214,23%,26%)]"
  />
</template>

<style scoped></style>
