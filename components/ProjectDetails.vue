<template>
  <div class="w-full mb-10 lg:px-12 xl:px-20 flex flex-col gap-4">
    <Carousel
      :wrap-around="true"
      :i18n="{
        ariaNextSlide: $t('carousel.ariaNextSlide'),
        ariaPreviousSlide: $t('carousel.ariaPreviousSlide'),
        ariaNavigateToSlide: $t('carousel.ariaNavigateToSlide', {
          slideNumber: '{slideNumber}',
        }),
        ariaGallery: $t('carousel.ariaGallery'),
        itemXofY: $t('carousel.itemXofY', {
          currentSlide: '{currentSlide}',
          slidesCount: '{slidesCount}',
        }),
        iconArrowUp: $t('carousel.iconArrowUp'),
        iconArrowDown: $t('carousel.iconArrowDown'),
        iconArrowRight: $t('carousel.iconArrowRight'),
        iconArrowLeft: $t('carousel.iconArrowLeft'),
      }"
      class="w-full lg:w-4/5 mx-auto"
    >
      <Slide
        v-for="slide in Number(
          $t('projects.' + prjKey + '.images.numberOfImages')
        )"
        :key="slide"
      >
        <div>
          <img
            :src="`/images/${$t(
              'projects.' + prjKey + '.images.folder'
            )}/${prjKey}_${slide}.png`"
            :alt="`Projekt Bild ${slide}`"
            class="lg:w-[90%] mx-auto h-[12rem] md:h-[20rem] lg:h-[30rem] flex items-center justify-center text-darkGray dark:text-lightGray"
          />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <div class="flex justify-between items-center">
      <h3 class="h2_medium_28 text-darkGray dark:text-lightGray">
        {{ $t("projects." + prjKey + ".title") }}
      </h3>
      <div class="flex gap-4 items-center">
        <LinkIcon
          v-if="$t('projects.' + prjKey + '.github')"
          iconName="github"
          iconPrefix="fab"
          :to="$t('projects.' + prjKey + '.github')"
        />
        <LinkIcon
          v-if="$t('projects.' + prjKey + '.webpage')"
          iconName="arrow-up-right-from-square"
          iconPrefix="fas"
          :to="$t('projects.' + prjKey + '.webpage')"
          iconWidth="w-[1.375rem]"
        />
      </div>
    </div>
    <p
      class="text-darkGray dark:text-lightGray pr-[5%] text-justify"
      v-for="text in $tm('projects.' + prjKey + '.text')"
    >
      {{ $rt(text) }}
    </p>
    <p
      v-if="$t('projects.' + prjKey + '.info')"
      class="text-darkGray dark:text-lightGray pr-[5%] text-justify"
    >
      <strong>{{ $t("projects.currentInfo") }}</strong
      >{{ $t("projects." + prjKey + ".info") }}
    </p>
    <div
      aria-role="list"
      :aria-label="$t('projects.techAriaLabel')"
      class="flex gap-4 flex-wrap mt-2"
    >
      <div
        v-for="tech in $tm('projects.' + prjKey + '.tech')"
        class="bg-forestGreen dark:bg-oliveGreen bg-opacity-50 rounded-md py-1 px-2 text_regular_18 text-darkGray dark:text-lightGray"
      >
        {{ $rt(tech) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const props = defineProps<{
  prjKey: string;
}>();
</script>

<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: white;
}

.carousel__pagination-button--active::after {
  background-color: #ff9800;
  opacity: 1 !important;
}
.carousel__pagination-button::after {
  background-color: #ff9800;
  opacity: 0.2;
}
.carousel__pagination-button:hover::after {
  background-color: #ff9800 !important;
  opacity: 1;
}
</style>
