<template>
  <div class="mt-[5%] md:ml-[10%]">
    <template v-if="viewportXS">
      <div class="w-full h-56 relative">
        <LandingHeading />
        <img
          src="/images/rocketOnly.png"
          alt="rocket-with-profile-picture"
          class="w-48 h-48 absolute right-0 bottom-0"
        />
      </div>
      <div class="flex flex-col items-center gap-4 mb-4">
        <div
          class="text-darkGray dark:text-lightGray sm:w-[30rem] lg:w-[40rem] rounded-lg shadow_light_4 bg-lightCharcoal dark:bg-darkCharcoal border-solid border-forestGreen dark:border-oliveGreen p-4 text-justify text_regular_18"
        >
          <p>{{ $t("landing") }}</p>
        </div>
        <button
          @click="navigateTo(localePath('/aboutme'))"
          class="text-warmOrange dark:text-warmOrange border-2 border-warmOrange dark:border-warmOrange rounded-md px-2 py-1 w-fit"
        >
          {{ $t("aboutme.title") }}
        </button>
      </div>
    </template>
    <template v-else>
      <LandingHeading />
      <div
        class="text-darkGray dark:text-lightGray sm:w-[30rem] lg:w-[40rem] mt-16 rounded-lg shadow_light_4 bg-lightCharcoal dark:bg-darkCharcoal border-solid border-forestGreen dark:border-oliveGreen p-4 text-justify text_regular_18"
      >
        <p>{{ $t("landing") }}</p>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Landing Page",
});

const localePath = useLocalePath();

const breakpointsTailwind = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
const viewportXS = ref(useBreakpoints(breakpointsTailwind).smaller("sm"));
</script>
