<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, inject, watch } from 'vue';
import type { Ref } from 'vue';
import TopVideo from '@/components/TopVideo.vue';
import TopImg from '@/components/TopImg.vue';
import TopAbout from '@/components/TopAbout.vue';
import CareerPage from './CareerPage.vue';
import ProductPage from './ProductPage.vue';

const selectSection = inject('selectSection') as Ref<string>;

const sectionsRef = ref<HTMLElement[]>([]);
let observer: IntersectionObserver;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      history.replaceState(null, '', `#${entry.target.id}`);
      selectSection.value = entry.target.id; // `selectSection` の値を更新
    }
  });
};

const scrollToSection = (id: string) => {
  const section = sectionsRef.value.find((s) => s.id === id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', `#${id}`);
  }
};

watch(selectSection, (newSectionId) => {
  scrollToSection(newSectionId);
});

onMounted(() => {
  const options = {
    root: null,
    threshold: 0.5
  };
  observer = new IntersectionObserver(handleIntersect, options);
  sectionsRef.value = Array.from(document.querySelectorAll('section'));
  sectionsRef.value.forEach((section) => observer.observe(section));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <section id="top">
    <v-container class="">
      <v-row justify="center" no-gutters v-if="$vuetify.display?.mdAndUp">
        <v-col cols="auto" v-for="(item, i) in 3" :key="i">
          <TopVideo />
        </v-col>
      </v-row>
      <v-row justify="center" v-if="$vuetify.display?.smAndDown">
        <v-col cols="auto"> <TopImg /> </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="auto" class="fontBold">{{ selectSection }} I am a Frontend Developer </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto" class="text-grey-darken-1"> Scroll </v-col>
      </v-row>
      <v-row justify="center" style="margin-bottom: 10rem">
        <v-col cols="auto" class="vertical-progress">
          <v-progress-linear :height="3" rounded="true" color="grey-lighten-1" indeterminate />
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section id="about">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto"> <TopAbout /> </v-col>
      </v-row>
    </v-container>
  </section>
  <section id="career">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto"> <CareerPage /> </v-col>
      </v-row>
    </v-container>
  </section>
  <section id="product">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto"> <ProductPage /> </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.container {
  scroll-snap-type: y mandatory;
  height: 100vh;
}
.area {
  scroll-snap-align: start;
  height: 100vh;
}
.vertical-progress {
  transform: rotate(90deg);
  width: 65px;
}
</style>
