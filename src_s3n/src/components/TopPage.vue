<script setup lang="ts">
import TopVideo from '@/components/TopVideo.vue';
</script>

<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-col cols="auto" v-for="(item, i) in 3" :key="i">
        <TopVideo />
      </v-col>
      <v-col cols="3" class="d-flex flex-column fontBold text-overlay text-h4">
        <div>フ</div>
        <div>ロ</div>
        <div>ン</div>
        <div>ト</div>
        <div>エ</div>
        <div>ン</div>
        <div>ドエンジニア</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.text-overlay {
  position: absolute;
  margin-top: 14rem;
  margin-right: 1rem;
}
</style>
