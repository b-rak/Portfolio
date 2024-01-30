<template>
  <div
    class="h-[20rem] w-[18rem] xl:h-[22rem] xl:w-[20rem] shadow-[0px_0px_0px_2px_#000000] p-8 flex flex-col gap-2 justify-center items-center"
    :class="{
      'cursor-pointer hover:shadow-[0px_0px_0px_8px_#ffb800]': !result,
    }"
    @click="$emit('selected', symbol)"
  >
    <slot />
    <button
      :id="symbol"
      class="flex flex-col gap-2 text_regular_18 text-darkGray dark:text-lightGray"
      :class="{ 'cursor-default': result }"
    >
      <img
        :src="`/images/${symbol}.png`"
        :alt="name"
        class="max-w-60 max-h-60"
      />
      {{ name }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  symbol: string;
  result: boolean;
}>();
</script>
