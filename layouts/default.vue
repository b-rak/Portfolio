<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <div
        class="bg-darkGray min-w-screen min-h-screen flex flex-col"
        :class="{
          fixed: menuOpen,
          'sm:bg-[url(/images/rocket.png)] sm:bg-no-repeat bg-contain bg-[left_0_top_50%]':
            landing,
        }"
      >
        <Navigation
          @toggle-menu="(open: boolean) => menu(open)"
          :openMenu="menuOpen"
        />
        <main
          class="grow px-[5%]"
          :class="{
            'filter blur-[5px] brightness-[0.7] select-none pointer-events-none':
              menuOpen,
          }"
        >
          <slot />
        </main>
        <Footer
          :landing="landing"
          :class="{
            'filter blur-[5px] brightness-[0.7] select-none pointer-events-none':
              menuOpen,
          }"
        />
      </div>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
// navigation bar related
const menuOpen = ref(false);
const menu = (open: boolean) => {
  menuOpen.value = open;
};

window.addEventListener("click", (event) => {
  if (!menuOpen.value) return;

  const menuElement = document.getElementById("menu") as HTMLElement;
  const hamburgerElement = document.getElementById(
    "hamburger-button"
  ) as HTMLElement;
  const closeElement = document.getElementById("x-button") as HTMLElement;

  if (
    !menuElement.contains(event.target as any) &&
    !hamburgerElement.contains(event.target as any) &&
    !closeElement.contains(event.target as any)
  ) {
    menuOpen.value = false;
  }
});

// page meta data
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
const title = computed(() =>
  t("layouts_title", {
    title: route.meta.title,
    interpolation: { escapeValue: false },
  })
);

// watch route for Footer
const landing = ref(
  route.path === "/" || route.path === "/en-GB" ? true : false
);
watch(
  () => route.path,
  () => {
    landing.value =
      route.path === "/" || route.path === "/en-GB" ? true : false;
  }
);
</script>
