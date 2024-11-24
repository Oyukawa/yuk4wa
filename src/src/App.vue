<script setup lang="ts">
import NavigationDrawer from './components/NavigationDrawer.vue';
import { ref, provide, onMounted, onBeforeUnmount } from 'vue';

const selectSection = ref('top');
provide('selectSection', selectSection);

const contentWidth = ref('');
const ratio = 0.508;
const mobileSize = 768;
const isMobile = ref(false);

const calculateContentWidth = () => {
  const screenWidth = window.innerWidth;

  isMobile.value = screenWidth <= mobileSize;

  if (isMobile.value) {
    contentWidth.value = '';
  } else {
    const width = Math.round(screenWidth * ratio);
    contentWidth.value = `${width}px`;
  }
};

onMounted(() => {
  calculateContentWidth();
  window.addEventListener('resize', calculateContentWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateContentWidth);
});
</script>

<template>
  <v-app>
    <NavigationDrawer :content-width="isMobile ? undefined : contentWidth" />
    <v-main>
      <div
        :style="{
          maxWidth: isMobile ? 'none' : contentWidth,
          margin: isMobile ? '0' : '0 auto'
        }"
      >
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped></style>
