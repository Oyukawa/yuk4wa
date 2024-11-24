<script setup lang="ts">
import TopVideo from '@/components/TopVideo.vue';
import TopImg from '@/components/TopImg.vue';
</script>

<template>
  <v-container>
    <v-row justify="center" no-gutters v-if="$vuetify.display?.mdAndUp">
      <v-col cols="auto" v-for="(item, i) in 3" :key="i">
        <TopVideo />
      </v-col>
    </v-row>
    <v-row justify="center" v-if="$vuetify.display?.smAndDown">
      <v-col cols="auto"> <TopImg /> </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
