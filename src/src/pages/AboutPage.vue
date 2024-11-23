<script setup lang="ts">
import TopAbout from '@/components/TopAbout.vue';
</script>

<template>
  <v-container class="area">
    <v-row justify="center">
      <v-col cols="auto"> <TopAbout /></v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.area {
  scroll-snap-align: start;
  height: 100vh;
}
</style>
