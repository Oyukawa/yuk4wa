<script setup lang="ts">
import image from '@/assets/images/IMG_top.jpg';
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img :width="800" aspect-ratio="16/9" cover :src="image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
