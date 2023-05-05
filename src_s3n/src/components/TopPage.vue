<script setup lang="ts">
import { ref, watch, reactive, onMounted, onUnmounted } from 'vue';
import TopVideo from '@/components/TopVideo.vue';
import TopImg from '@/components/TopImg.vue';

// TODO:スクロールが検知できない
const activeLink = ref('about');
const links = ['about', 'portfolio', 'contact'];
const state = reactive({
  scrollPosition: 0
});

const handleScroll = () => {
  state.scrollPosition = window.scrollY;
};

watch(
  () => state.scrollPosition,
  () => {
    switch (true) {
      case state.scrollPosition >= 0 && state.scrollPosition < 500:
        activeLink.value = links[0]; // about
        break;
      case state.scrollPosition >= 500 && state.scrollPosition < 1000:
        activeLink.value = links[1]; // portfolio
        break;
      default:
        activeLink.value = links[2]; // contact
    }
  }
);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
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
    {{ state.scrollPosition }}:
    {{ activeLink }}
  </v-container>
</template>
<style scoped>
.text-link {
  color: #000000; /* カラーを変更してリンクのように見せる */
  text-decoration: none;
}
</style>
