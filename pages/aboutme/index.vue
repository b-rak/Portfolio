<template>
  <h1
    class="font-handwriting text-5xl text-darkGray dark:text-lightGray items-center mt-8"
  >
    {{ $t("aboutme.title") }}
  </h1>
  <div class="flex flex-col lg:flex-row gap-4 mt-4">
    <div
      class="w-full lg:w-1/2 p-6 bg-forestGreen dark:bg-oliveGreen bg-opacity-50 rounded-lg shadow_light_5"
    >
      <h3 class="text-darkGray dark:text-lightGray text-xl font-lato">
        {{ $t("aboutme.general.title") }}
      </h3>
      <ul
        class="pl-8 list-disc items-center mt-4 marker:text-darkGray dark:marker:text-lightGray marker:text-xl text-darkGray dark:text-lightGray text_regular_18"
      >
        <li>{{ $t("aboutme.general.born") }}</li>
        <li>
          <p>
            {{ $t("aboutme.general.studies[0]") }}
          </p>
          <div
            class="w-8 h-1 bg-darkGray dark:bg-lightGray mx-auto my-2 rounded-md"
          ></div>
          <p>{{ $t("aboutme.general.studies[1]") }}</p>
          <div
            class="w-8 h-1 bg-darkGray dark:bg-lightGray mx-auto my-2 rounded-md"
          ></div>
          <p>{{ $t("aboutme.general.studies[2]") }}</p>
        </li>
        <li>{{ $t("aboutme.general.hobbies") }}</li>
        <li>
          {{ $t("aboutme.general.random") }}
          <a
            :href="localePath('/aboutme/rps')"
            class="hover:underline text-warmOrange dark:text-warmOrange"
            >Match</a
          >?
        </li>
        <li>{{ $t("aboutme.general.animals") }}</li>
      </ul>
    </div>
    <div
      class="w-full lg:w-1/2 p-6 bg-lightCharcoal dark:bg-darkCharcoal rounded-lg shadow_light_4"
    >
      <h3 class="text-darkGray dark:text-lightGray text-xl font-lato">
        Skills
      </h3>
      <ul class="mt-4 rounded-md p-4 text_regular_18">
        <li class="flex items-center gap-4 text-darkGray dark:text-lightGray">
          <FAIcon iconPrefix="fas" iconName="code" iconWidth="w-6" />
          {{ $t("aboutme.skills[0]") }}
        </li>
        <li class="flex items-center gap-4 text-darkGray dark:text-lightGray">
          <FAIcon iconPrefix="fas" iconName="desktop" iconWidth="w-5" />
          {{ $t("aboutme.skills[1]") }}
        </li>
        <li class="flex items-center gap-4 text-darkGray dark:text-lightGray">
          <FAIcon iconPrefix="fab" iconName="git-alt" iconWidth="w-5" />
          {{ $t("aboutme.skills[2]") }}
        </li>
        <li class="flex items-center gap-4 text-darkGray dark:text-lightGray">
          <FAIcon iconPrefix="fab" iconName="accessible-icon" iconWidth="w-5" />
          {{ $t("aboutme.skills[3]") }}
        </li>
        <li class="flex items-center gap-4 text-darkGray dark:text-lightGray">
          <FAIcon iconPrefix="fas" iconName="list-check" iconWidth="w-5" />
          {{ $t("aboutme.skills[4]") }}
        </li>
        <li class="flex items-center gap-4 text-darkGray dark:text-lightGray">
          <FAIcon iconPrefix="fas" iconName="robot" iconWidth="w-6" />
          {{ $t("aboutme.skills[5]") }}
        </li>
        <li class="flex items-center gap-4 text-darkGray dark:text-lightGray">
          <FAIcon iconPrefix="fas" iconName="user-astronaut" iconWidth="w-5" />
          {{ $t("aboutme.skills[6]") }}
        </li>
        <li class="flex items-center gap-4 text-darkGray dark:text-lightGray">
          <FAIcon iconPrefix="fab" iconName="docker" iconWidth="w-6" />
          {{ $t("aboutme.skills[7]") }}
        </li>
        <li class="flex items-center gap-4 text-darkGray dark:text-lightGray">
          <FAIcon iconPrefix="fas" iconName="terminal" iconWidth="w-5" />
          {{ $t("aboutme.skills[8]") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li + li {
  margin-top: 0.75rem;
}
</style>

<script lang="ts" setup>
const localePath = useLocalePath();

definePageMeta({
  title: "About Me",
});
</script>
