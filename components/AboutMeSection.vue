<template>
  <div
    class="p-6 rounded-lg"
    :class="[
      index % 2 === 0
        ? 'bg-lightCharcoal dark:bg-darkCharcoal shadow_light_4'
        : 'bg-forestGreen dark:bg-oliveGreen bg-opacity-50 shadow_light_5',
      {
        'lg:bg-lightCharcoal lg:dark:bg-darkCharcoal lg:shadow_light_4':
          index % 4 === 3,
        'lg:bg-forestGreen  lg:dark:bg-oliveGreen lg:bg-opacity-50 lg:shadow_light_5':
          index % 4 === 0,
      },
    ]"
  >
    <h3 class="text-darkGray dark:text-lightGray text-xl font-lato">
      {{ $t("aboutme." + langKey + ".title") }}
    </h3>
    <ul
      class="pl-8 list-disc items-center mt-4 marker:text-darkGray dark:marker:text-lightGray marker:text-xl text-darkGray dark:text-lightGray text_regular_18"
    >
      <li v-for="(text, ind) in $tm('aboutme.' + langKey + '.text')">
        {{ $rt(text) }}
        <slot
          v-if="ind === ($tm('aboutme.' + langKey + '.text') as Array<string>).length - 1"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  langKey: string;
  index: number;
}>();
</script>

<style scoped>
li + li {
  margin-top: 0.75rem;
}
</style>
