<script setup lang="ts">
import type { Career } from '@/types/global';
import { onBeforeMount, reactive } from 'vue';
import CareerCard from '@/components/CareerCard.vue';

const state = reactive({
  careerList: new Array<Career>()
});

const fetchCareerList = async () => {
  const res = await fetch('/careerList');
  state.careerList = await res.json();
};

onBeforeMount(() => fetchCareerList());
</script>
<template>
  <CareerCard :career-list="state.careerList" />
</template>
<style scoped></style>
