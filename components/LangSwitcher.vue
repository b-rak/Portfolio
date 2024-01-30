<template>
  <button
    @click="changeLocale($event)"
    class="text-darkGray dark:text-lightGray hover:scale-110"
    :aria-label="$t('nav.langSwitcher')"
  >
    {{ locale === "de-DE" ? "EN" : "DE" }}
  </button>
</template>

<script lang="ts" setup>
const { locale } = useI18n();

const router = useRouter();
const switchLocalePath = useSwitchLocalePath();

const changeLocale = (event: Event) => {
  const target = event.target as HTMLInputElement;
  router.push({
    path: switchLocalePath(target.textContent === "DE" ? "de-DE" : "en-GB"),
  });
};
</script>
