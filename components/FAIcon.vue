<template>
  <div class="w-6 h-6 flex items-center justify-center shrink-0">
    <font-awesome-icon
      :icon="{
        prefix: iconPrefix,
        iconName: iconName,
      }"
      :class="iconWidth"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  iconPrefix: string;
  iconName: string;
  iconWidth: string;
}>();
</script>
