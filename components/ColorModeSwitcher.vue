<template>
  <div class="w-6 h-full overflow-hidden flex items-center justify-center">
    <font-awesome-icon
      :icon="['fas', 'moon']"
      id="moon"
      @click="toggle()"
      class="text-warmOrange dark:text-warmOrange cursor-pointer w-5 absolute"
      :class="{ 'translate-y-8 opacity-0 pointer-events-none': !darkMode }"
    />
    <font-awesome-icon
      :icon="['far', 'sun']"
      id="sun"
      @click="toggle()"
      class="text-warmOrange dark:text-warmOrange cursor-pointer absolute w-6"
      :class="{ 'translate-y-8 opacity-0 pointer-events-none': darkMode }"
    />
  </div>
</template>

<style scoped>
.go-down {
  animation: go-down 0.75s ease-in-out 0s 1 normal forwards;
}
.rise-up {
  animation: rise-up 0.75s ease-in-out 0s 1 normal forwards;
}

@keyframes go-down {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(2rem);
    opacity: 0;
  }
}

@keyframes rise-up {
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

<script lang="ts" setup>
const userPreference = getUserPreference();
const colorMode = getAppliedMode(userPreference);
const darkMode = ref(colorMode === "dark");
if (darkMode.value) {
  (document.querySelector("html") as HTMLElement).classList.add("dark");
}

const toggle = () => {
  const moon = document.getElementById("moon") as HTMLElement;
  const sun = document.getElementById("sun") as HTMLElement;
  const waitTime = document.documentElement.clientWidth <= 768 ? 0 : 1500;

  if (darkMode.value) {
    saveUserPreference("light");
    moon.classList.add("go-down");
    setTimeout(() => {
      sun.classList.add("rise-up");
      (document.querySelector("html") as HTMLElement).classList.remove("dark");
    }, 750);
  } else {
    saveUserPreference("dark");
    sun.classList.add("go-down");
    setTimeout(() => {
      moon.classList.add("rise-up");
      (document.querySelector("html") as HTMLElement).classList.add("dark");
    }, 750);
  }
  setTimeout(() => (darkMode.value = !darkMode.value), waitTime);
};
</script>

<script lang="ts">
function getUserPreference() {
  return localStorage.getItem("theme") || "system";
}
function saveUserPreference(userPreference: string) {
  localStorage.setItem("theme", userPreference);
}

function getAppliedMode(userPreference: string) {
  if (userPreference === "light") {
    return "light";
  }
  if (userPreference === "dark") {
    return "dark";
  }
  // system
  if (matchMedia("(prefers-color-scheme:dark)").matches) {
    return "dark";
  }
  return "light";
}
</script>
