<script setup lang="ts">
import type { Career } from '@/types/global';
import { onBeforeMount, reactive } from 'vue';
import CareerCard from '@/components/CareerCard.vue';
import careerList from '@/mocks/data/careerList.json';

const state = reactive({
  careerList: new Array<Career>()
});

const fetchCareerList = async () => {
  // NOTE:githubPageにmsw使えないためJSONを直接代入
  // const res = await fetch('/api/careerList');
  // state.careerList = await res.json();
  state.careerList = careerList;
};

onBeforeMount(() => fetchCareerList());
</script>
<template>
  <CareerCard :career-list="state.careerList" />
</template>
<style scoped></style>
