<template>
  <h1 class="font-handwriting text-5xl text-darkGray dark:text-lightGray mt-8">
    {{ $t("experience.title") }}
  </h1>

  <div class="flex flex-col lg:flex-row gap-8 lg:12 pt-10 lg:px-10 xl:px-20">
    <div
      class="flex lg:flex-col gap-4 items-start text-darkGray dark:text-lightGray lg:min-w-fit overflow-y-hidden overflow-x-auto w-[20rem] min-[425px]:w-auto"
      aria-role="tablist"
      aria-label="Job list tabs"
    >
      <button
        v-for="i in 4"
        class="button_semibold_18 no-underline hover:text-[#A4ACCC] dark:hover:text-[#8892B0] after:block after:content-[''] after:border-b-[0.188rem] after:border-b-deepRed dark:after:border-b-brightRed after:scale-x-0 after:transition after:ease-in-out after:duration-[250ms]"
        :class="{
          'after:scale-x-100 after:origin-[0%_50%] !text-darkGray dark:!text-lightGray':
            selected === i,
        }"
        role="tab"
        :aria-selected="selected === i ? true : false"
        :aria-controls="`panel-${i}`"
        :id="`tab-${i}`"
        :tabindex="selected === i ? '0' : '-1'"
        @click="selected = i"
      >
        {{ jobs[i - 1].title }}
      </button>
    </div>
    <div
      v-for="i in 4"
      :id="`panel-${i}`"
      role="tabpanel"
      :tabindex="selected === i ? '0' : '-1'"
      :aria-labelledby="`tab-${i}`"
      :hidden="selected !== i"
      :class="{ 'content-in': selected === i }"
      class="p-6 bg-lightCharcoal dark:bg-darkCharcoal rounded-lg shadow_light_4 text-darkGray dark:text-lightGray"
    >
      <h2 class="h2_medium_28">{{ jobs[i - 1].title }}</h2>
      <h3
        class="h3_medium_18 mt-1 text-darkGray dark:text-lightGray text-opacity-60"
      >
        {{ $t("experience." + jobs[i - 1].key + ".time") }}
        <a
          :href="jobs[i - 1].employerHomepage"
          rel="noreferrer"
          target="_blank"
          class="text-forestGreen dark:text-oliveGreen hover:underline"
          >{{ jobs[i - 1].employer }}</a
        >
      </h3>
      <ol class="list-disc px-4 mt-4">
        <li
          v-for="task in $tm('experience.' + jobs[i - 1].key + '.tasks')"
          class="text_regular_18"
        >
          {{ $rt(task) }}
        </li>
      </ol>
      <div
        aria-role="list"
        aria-label="Skill list related to job"
        class="flex gap-4 flex-wrap mt-4"
      >
        <div
          v-for="skill in jobs[i - 1].skills"
          class="bg-forestGreen dark:bg-oliveGreen rounded-md py-1 px-2 text_regular_18 bg-opacity-50 text-darkGray dark:text-lightGray"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.content-in {
  animation: fadeIn 0.75s linear 0s 1 normal forwards;
}

@keyframes fadeIn {
  0% {
    transform: translateY(3rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

<script lang="ts" setup>
const selected = ref(1);

const jobs = [
  {
    title: "Senior Innovation Engineer",
    employer: "Appmatics",
    employerHomepage: "https://www.appmatics.com/de/",
    skills: [
      "JavaScript/TypeScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Nuxt.js",
      "Netlify",
      "Basic Shell Scripting",
      "Accessiblity Testing",
    ],
    key: "innovation",
  },
  {
    title: "Senior Automation Engineer",
    employer: "Appmatics",
    employerHomepage: "https://www.appmatics.com/de/",
    skills: ["Robot", "Python", "Allure"],
    key: "seniorAutomation",
  },
  {
    title: "Automation Engineer",
    employer: "Appmatics",
    employerHomepage: "https://www.appmatics.com/de/",
    skills: [
      "Selenium",
      "Appium",
      "Java",
      "TestNG",
      "ExtentReport",
      "Git",
      "Playwright",
      "Projektmanagement",
      "API Testing",
      "Jenkins",
    ],
    key: "automation",
  },
  {
    title: "Lead QA Tester",
    employer: "Appmatics",
    employerHomepage: "https://www.appmatics.com/de/",
    skills: ["Jira", "Confluence", "Testrail", "ISTQB Foundation Level"],
    key: "tester",
  },
];

definePageMeta({
  title: "Experience",
});
</script>
