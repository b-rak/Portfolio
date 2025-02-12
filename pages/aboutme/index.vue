<template>
  <h1
    class="font-handwriting text-5xl text-darkGray dark:text-lightGray items-center mt-8"
  >
    {{ $t("aboutme.title") }}
  </h1>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
    <AboutMeSection langKey="general" :index="1"
      ><a
        :href="localePath('/aboutme/rps')"
        class="hover:underline text-orangeBrown dark:text-warmOrange"
        >Match</a
      >?</AboutMeSection
    >

    <div
      class="p-6 bg-lightCharcoal dark:bg-darkCharcoal rounded-lg shadow_light_4"
    >
      <h3 class="text-darkGray dark:text-lightGray text-xl font-lato">
        Skills
      </h3>
      <ul class="rounded-md p-4 text_regular_18">
        <li
          v-for="(text, ind) in $tm('aboutme.skills')"
          class="flex items-center gap-4 text-darkGray dark:text-lightGray"
        >
          <FAIcon
            :iconPrefix="icons[ind].iconPrefix"
            :iconName="icons[ind].iconName"
            :iconWidth="icons[ind].iconWidth"
          />
          {{ $rt(text) }}
        </li>
      </ul>
    </div>

    <AboutMeSection langKey="education" :index="3" />
    <AboutMeSection langKey="certificates" :index="4" />
  </div>
</template>

<style scoped>
li + li {
  margin-top: 0.75rem;
}
</style>

<script lang="ts" setup>
const localePath = useLocalePath();

const icons = [
  { iconPrefix: "fas", iconName: "code", iconWidth: "w-6" },
  { iconPrefix: "fas", iconName: "desktop", iconWidth: "w-5" },
  { iconPrefix: "fas", iconName: "gear", iconWidth: "w-5" },
  { iconPrefix: "fab", iconName: "git-alt", iconWidth: "w-5" },
  { iconPrefix: "fab", iconName: "accessible-icon", iconWidth: "w-5" },
  { iconPrefix: "fas", iconName: "list-check", iconWidth: "w-5" },
  { iconPrefix: "fas", iconName: "robot", iconWidth: "w-6" },
  { iconPrefix: "fas", iconName: "user-astronaut", iconWidth: "w-5" },
  { iconPrefix: "fab", iconName: "docker", iconWidth: "w-6" },
  { iconPrefix: "fas", iconName: "terminal", iconWidth: "w-5" },
];

definePageMeta({
  title: "About Me",
});
</script>
