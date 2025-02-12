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
    tech: ["React", "Typescript", "Tailwind", "Express", "MongoDB", "Python"],
    image: "/images/uplift/uplift_3.png",
    path: "uplift",
    prjKey: "uplift",
  },
  {
    tech: ["React", "Typescript", "Jest", "Express"],
    image: "/images/barsync/barsync_1.png",
    path: "bar-sync",
    prjKey: "barSync",
  },
  {
    tech: [
      "React",
      "Javascript",
      "Tailwind",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    image: "/images/cooksphere/cooksphere_1.png",
    path: "cooksphere",
    prjKey: "cooksphere",
  },
  {
    tech: ["Nuxt3", "Typescript", "Tailwind", "Springboot"],
    image: "/images/dashboard/newDashboard_2.png",
    path: "new-dashboard",
    prjKey: "newDashboard",
  },
  {
    tech: ["Nuxt3", "Typescript", "Supabase", "Prisma", "Tailwind"],
    image: "/images/masteringnuxt/masteringNuxt_1.png",
    path: "mastering-nuxt-3",
    prjKey: "masteringNuxt",
  },
];
</script>
