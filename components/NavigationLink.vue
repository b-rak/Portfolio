<template>
  <NuxtLink
    :to="localePath(to)"
    :id="id"
    :class="[
      selected
        ? 'text-[#855000] dark:text-[#FF9800]'
        : 'text-[#333333] dark:text-[#cfcfcf]',
    ]"
    class="cursor-pointer no-underline hover:text-[#855000] dark:hover:text-[#FF9800] font-mono font-bold"
    >{{ text }}</NuxtLink
  >
</template>

<script lang="ts" setup>
const props = defineProps<{
  to: string;
  id: string;
  text: string;
}>();

const localePath = useLocalePath();

const route = useRoute();
const selected = ref(
  props.to === "/"
    ? route.path === localePath(`${props.to}`)
    : route.path.includes(localePath(`${props.to}`))
);

watch(
  () => route.path,
  () => {
    if (props.to === "/") {
      selected.value = route.path === localePath(`${props.to}`);
    } else {
      selected.value = route.path.includes(localePath(`${props.to}`));
    }
  }
);
</script>
