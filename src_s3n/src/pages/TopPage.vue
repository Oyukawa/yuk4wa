<script setup lang="ts">
import { ref } from 'vue';
import TopVideo from '@/components/TopVideo.vue';
import TopImg from '@/components/TopImg.vue';
const activeLink = ref('about');
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
    <v-row justify="center" dense>
      <v-col cols="auto"
        ><router-link :to="activeLink" class="text-link fontBold">
          I am a Frontend Developer
        </router-link></v-col
      >
    </v-row>
  </v-container>
</template>
<style scoped>
.text-link {
  color: #000000; /* カラーを変更してリンクのように見せる */
  text-decoration: none;
}
</style>
