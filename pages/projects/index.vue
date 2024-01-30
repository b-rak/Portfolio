<template>
  <h1 class="font-handwriting text-5xl text-darkGray dark:text-lightGray mt-8">
    {{ $t("projects.title") }}
  </h1>
  <div class="flex flex-col gap-10 md:gap-20 my-4">
    <Project v-for="project in projects" :project="project" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Projects",
});
const projects = [
  {
    tech: ["Vanilla JS", "Bootstrap", "Webpack", "Node.JS", "Jest"],
    image: "/images/naehrstoffrechner/naehrstoffe_1.png",
    path: "nutrition-calculator",
    prjKey: "naehrstoffe",
  },
  {
    tech: ["Vanilla JS", "HTML", "CSS"],
    image: "/images/adventofjs.png",
    path: "js-challenges",
    prjKey: "jsChallenges",
  },
  {
    tech: ["Nuxt3", "Typescript", "Supabase", "Prisma", "Tailwind"],
    image: "/images/masteringnuxt/masteringNuxt_1.png",
    path: "mastering-nuxt-3",
    prjKey: "masteringNuxt",
  },
  {
    tech: ["Nuxt3", "Typescript", "Tailwind", "Springboot"],
    image: "/images/dashboard/newDashboard_2.png",
    path: "new-dashboard",
    prjKey: "newDashboard",
  },
];
</script>
