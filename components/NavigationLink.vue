<template>
  <NuxtLink
    :to="localePath(to)"
    :id="id"
    :class="{ 'text-[#ff9800]': selected }"
    class="text-[#cfcfcf] cursor-pointer no-underline hover:text-[#ff9800] font-mono font-bold"
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
