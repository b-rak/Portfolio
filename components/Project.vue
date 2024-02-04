<template>
  <div class="relative flex flex-col gap-4 px-0">
    <h2
      class="h2_medium_28 text-darkGray dark:text-lightGray border-b-2 border-b-orangeBrown dark:border-b-warmOrange ml-[25%]"
    >
      {{ $t("projects." + project.prjKey + ".title") }}
    </h2>
    <div
      class="flex flex-col md:flex-row gap-6 md:gap-8 text-darkGray dark:text-lightGray relative items-center w-full"
    >
      <div
        class="md:w-[38rem] md:h-[13.5rem] min-[1340px]:h-[23rem] min-[1340px]:z-10 min-[1340px]:ml-[4.5rem] cursor-pointer flex items-center"
        @click="goToDetails()"
        @mouseover="hover = true"
        @mouseout="hover = false"
      >
        <img
          :src="project.image"
          :alt="`Projektbild von Projekt '${$t(
            'projects.' + project.prjKey + '.title'
          )}'`"
          class="w-full md:h-[13.5rem] min-[1340px]:h-[21rem] filter lg:brightness-50 shadow_light_1"
          :class="{ '!brightness-100': hover }"
        />
      </div>
      <div
        class="p-6 bg-lightCharcoal dark:bg-darkCharcoal rounded-lg shadow_light_4 w-full md:min-h-[13.5rem] min-[1340px]:absolute min-[1340px]:pl-[45rem] min-[1340px]:max-h-[21rem] cursor-pointer"
        @click="goToDetails()"
        @mouseover="hover = true"
        @mouseout="hover = false"
      >
        <p class="min-[1340px]:mt-8 text-justify">
          {{ $t("projects." + project.prjKey + ".overviewDescription") }}
        </p>
        <LinkIcon
          v-if="$t('projects.' + project.prjKey + '.github')"
          iconName="github"
          iconPrefix="fab"
          :to="$t('projects.' + project.prjKey + '.github')"
          class="inline-block mt-2"
          @click.stop
        />
        <div
          aria-role="list"
          aria-label="Liste eingesetzter Technologien"
          class="flex gap-4 flex-wrap mt-4 min-[1340px]:absolute min-[1340px]:-bottom-4"
        >
          <div
            v-for="tech in project.tech"
            class="bg-lightCharcoal dark:bg-darkCharcoal rounded-md py-1 px-2 text_regular_18 text-forestGreen dark:text-oliveGreen shadow_light_4"
          >
            {{ tech }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  project: {
    tech: Array<string>;
    image: string;
    path: string;
    prjKey: string;
  };
}>();

const hover = ref(false);

const localePath = useLocalePath();
const goToDetails = () => {
  navigateTo(localePath(`/projects/${props.project.path}`));
};
</script>
