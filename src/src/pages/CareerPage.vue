<script setup lang="ts">
import type { Career, OccupationList } from '@/types/global';
import { onBeforeMount, reactive } from 'vue';
import CareerCard from '@/components/CareerCard.vue';
import careerList from '@/assets/data/careerList.json';
import { useCalculateDuration } from '@/stores/calculateDuration';
import dayjs from 'dayjs';

const state = reactive({
  careerList: new Array<Career>(),
  occupationList: {} as OccupationList
});

const fetchCareerList = async () => {
  // NOTE:githubPageにmsw使えないためJSONを直接代入
  // const res = await fetch('/api/careerList');
  // state.careerList = await res.json();
  state.careerList = careerList;
  state.occupationList = {
    occupation1: `法人営業(${useCalculateDuration().dateRange(
      state.careerList[1]?.startDate,
      state.careerList[1]?.endDate
    )})`,
    occupation2: `販売員(${useCalculateDuration().dateRange(
      state.careerList[2]?.startDate,
      state.careerList[2]?.endDate
    )})`,
    occupation3: `ITエンジニア(${useCalculateDuration().dateRange(
      state.careerList[3]?.startDate,
      dayjs().format('YYYY/MM')
    )})`
  };
};

onBeforeMount(() => {
  fetchCareerList();
});
</script>
<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <v-card>
          <v-card-item>
            <v-card-subtitle>概要</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            {{ state.occupationList.occupation1 }} → {{ state.occupationList.occupation2 }} →
            {{ state.occupationList.occupation3 }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10">
        <CareerCard :career-list="state.careerList" />
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
