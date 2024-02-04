<template>
  <a
    :href="to"
    target="_blank"
    rel="noreferrer"
    class="cursor-pointer"
    :aria-label="`Link to ${iconName}`"
  >
    <font-awesome-icon
      :icon="{ prefix: iconPrefix, iconName: iconName }"
      :class="`${iconWidth} text-black hover:text-darkGray dark:text-white dark:hover:text-lightGray`"
    />
  </a>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    iconName: string;
    iconPrefix: string;
    to: string;
    iconWidth?: string;
  }>(),
  {
    iconWidth: "w-6",
  }
);
</script>
