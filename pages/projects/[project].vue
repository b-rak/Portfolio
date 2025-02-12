<template>
  <div class="flex flex-col gap-8 pt-4">
    <div
      class="flex items-center gap-4 cursor-pointer text-darkGray dark:text-lightGray w-fit"
      @click="() => navigateTo(localePath('/projects'))"
    >
      <font-awesome-icon
        :icon="['fas', 'angle-left']"
        class="h-6 w-4 text-[1.5rem]"
      />
      <span>{{ $t("projects.backButton") }}</span>
    </div>
    <ProjectDetails :prjKey="prjKey" />
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();

const route = useRoute();
const prjKey = computed(() => {
  const param = route.params.project;
  if (param === "mastering-nuxt-3") return "masteringNuxt";
  else if (param === "new-dashboard") return "newDashboard";
  else if (param === "cooksphere") return "cooksphere";
  else if (param === "bar-sync") return "barSync";
  else if (param === "uplift") return "uplift";
  else return "";
});

definePageMeta({
  middleware: "projects",
  title: "Projectdetails",
});
</script>
