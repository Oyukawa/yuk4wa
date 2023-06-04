<script setup lang="ts">
import type { Career } from '@/types/global';
import { onBeforeMount, reactive } from 'vue';

const props = defineProps<{
  careerList: Array<Career>;
}>();

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
  <v-timeline side="end" align="start">
    <v-timeline-item size="large" v-for="career in props.careerList" :key="career.careerId">
      <template v-slot:icon>
        <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
      </template>
      <template v-slot:opposite>
        <span>{{ career.startDate }} - {{ career.endDate }}</span>
      </template>
      <v-card>
        <v-card-item>
          <v-card-title>{{ career.company }}</v-card-title>
          <v-card-subtitle>
            <span class="me-1">{{ career.department }}:{{ career.position }}</span>
          </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          {{ career.responsibilities }}
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-item v-for="achievement in career.achievements" :key="achievement.description">
          <v-card-title>{{ achievement.title }}</v-card-title>
          <v-card-subtitle>{{ achievement.from }} - {{ achievement.to }}</v-card-subtitle>
          <v-card-text>
            {{ achievement.description }}
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<style scoped></style>
