<template>
  <div>
    <div
      class="md:flex gap-6 justify-end pr-[5%] w-full h-16 items-center shadow_light_3 hidden"
    >
      <NavigationLink to="/" id="landing-page" :text="$t('nav.landing')" />
      <NavigationLink
        to="/experience"
        id="experience"
        :text="$t('nav.experience')"
      />
      <NavigationLink to="/projects" id="projects" :text="$t('nav.projects')" />
      <NavigationLink to="/aboutme" id="aboutme" :text="$t('nav.aboutme')" />
      <div
        class="flex items-center gap-6 border-l border-l-darkGray dark:border-l-lightGray px-6"
      >
        <LangSwitcher />
        <ColorModeSwitcher />
      </div>
    </div>

    <div
      class="w-screen h-16 shadow_light_3 flex justify-end items-center pr-[5%] relative z-10 md:hidden"
    >
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="absolute z-[11] w-6 text-warmOrange dark:text-warmOrange transition-all duration-500 cursor-pointer"
        :class="{ 'opacity-0 scale-y-[0%]': openMenu }"
        @click="toggleMenu()"
        id="hamburger-button"
      />
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="absolute z-[10] w-6 text-warmOrange dark:text-warmOrange transition-all duration-500 cursor-pointer"
        :class="[openMenu ? 'opacity-1' : 'opacity-0 rotate-90']"
        @click="toggleMenu()"
        id="x-button"
      />
      <div
        class="fixed top-0 right-0 md:hidden flex flex-col gap-4 p-6 pt-16 bg-lightCharcoal dark:bg-darkCharcoal transform transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
        :class="[openMenu ? 'translate-x-0' : 'translate-x-full']"
        id="menu"
      >
        <NavigationLink
          to="/"
          id="landing-page"
          :text="$t('nav.landing')"
          @click="$emit('toggleMenu', false)"
        />
        <NavigationLink
          to="/experience"
          id="experience"
          :text="$t('nav.experience')"
          @click="$emit('toggleMenu', false)"
        />
        <NavigationLink
          to="/projects"
          id="projects"
          :text="$t('nav.projects')"
          @click="$emit('toggleMenu', false)"
        />
        <NavigationLink
          to="/aboutme"
          id="aboutme"
          :text="$t('nav.aboutme')"
          @click="$emit('toggleMenu', false)"
        />
        <div
          class="flex flex-col gap-4 border-t border-t-darkGray dark:border-t-lightGray py-4"
        >
          <LangSwitcher />
          <ColorModeSwitcher class="w-full !h-6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  openMenu: boolean;
}>();

const emit = defineEmits(["toggleMenu"]);
const toggleMenu = () => {
  emit("toggleMenu", !props.openMenu);
};
</script>
