<template>
  <p
    v-if="landing"
    class="text_regular_18 text-darkGray dark:text-lightGray opacity-55 w-screen text-center px-5"
  >
    {{ $t("footer") }}
  </p>
  <div class="py-5 flex justify-center items-center gap-4 w-screen relative">
    <div
      class="h-1 w-20 bg-orangeBrown dark:bg-warmOrange rounded-md"
      aria-role="decorative horizontal line element"
    ></div>
    <LinkIcon
      iconName="github"
      iconPrefix="fab"
      to="https://github.com/b-rak"
    />
    <LinkIcon
      iconName="linkedin"
      iconPrefix="fab"
      to="https://www.linkedin.com/in/tas-burak/"
    />
    <div
      class="h-1 w-20 bg-orangeBrown dark:bg-warmOrange rounded-md"
      aria-role="decorative horizontal line element"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ landing: boolean }>();
</script>
