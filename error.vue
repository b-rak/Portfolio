<template>
  <div
    class="bg-lightGray dark:bg-darkGray min-w-screen min-h-screen flex flex-col items-center justify-center"
  >
    <div class="flex flex-col items-center gap-8">
      <div v-if="error.statusCode === 404" class="flex flex-col items-center">
        <h1 class="font-lato text-[5rem] text-deepOrange dark:text-brightRed">
          404
        </h1>
        <p class="text_regular_18 text-darkGray dark:text-lightGray">
          {{ $t("error.pageNotFound") }}
        </p>
      </div>
      <div v-else class="flex flex-col items-center">
        <h1 class="font-lato text-[5rem] text-deepOrange dark:text-brightRed">
          {{ error.statusCode }}
        </h1>
        <p class="text_regular_18 text-darkGray dark:text-lightGray">
          {{ $t("error.somethingBroke") }}
        </p>
        <p class="text_regular_18 text-darkGray dark:text-lightGray">
          {{ $t("error.sorry") }}
        </p>
      </div>
      <div class="mt-5">
        <p>
          <strong class="text-darkGray dark:text-lightGray">{{
            error.message
          }}</strong>
        </p>
        <p class="text_regular_18 text-darkGray dark:text-lightGray">
          {{ $t("error.backTo") }}
          <a
            class="text-warmOrange dark:text-warmOrange underline hover:cursor-pointer"
            @click="navigateTo(localePath('/'))"
          >
            {{ $t("error.button") }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const error = useError();
const localePath = useLocalePath();
</script>
