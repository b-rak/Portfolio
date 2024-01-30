<template>
  <div class="w-full">
    <div
      class="flex items-center gap-4 cursor-pointer text-darkGray dark:text-lightGray"
      @click="() => navigateTo(localePath('/aboutme'))"
    >
      <font-awesome-icon
        :icon="['fas', 'angle-left']"
        class="h-6 w-4 text-[1.5rem]"
      />
      <span>{{ $t("aboutme.rps.backButton") }}</span>
    </div>
    <h2
      class="h2_medium_28 text-center mb-8 text-darkGray dark:text-lightGray mt-4 md:mt-0"
    >
      {{ heading }}
    </h2>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  heading: string;
}>();
const localePath = useLocalePath();
</script>
