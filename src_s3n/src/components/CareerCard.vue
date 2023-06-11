<script setup lang="ts">
import icon from '@/assets/images/icons/IMG_miniIcon.png';
import type { Career } from '@/types/global';
import { useCalculateDuration } from '@/stores/calculateDuration';

const dateRange = (startDate: string, endDate: string) => {
  const years = useCalculateDuration().calculateDuration(startDate, endDate).years;
  const months = useCalculateDuration().calculateDuration(startDate, endDate).months;
  return `${years}年${months}ヶ月`;
};

const props = defineProps<{
  careerList: Array<Career>;
}>();
</script>
<template>
  <v-timeline side="end" align="start">
    <v-timeline-item size="large" v-for="career in props.careerList" :key="career.careerId">
      <template v-slot:icon>
        <v-avatar :image="icon"></v-avatar>
      </template>
      <template v-slot:opposite v-if="career.startDate || career.endDate">
        <p>{{ career.startDate }} - {{ career.endDate }}</p>
        <p>
          {{ dateRange(career.startDate, career.endDate) }}
        </p>
      </template>
      <v-card>
        <v-card-item>
          <v-card-title>{{ career.company }}</v-card-title>
          <v-card-subtitle>
            <span class="me-1">{{ career.department }}{{ career.position }}</span>
          </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          {{ career.responsibilities }}
        </v-card-text>

        <v-divider class="mx-4 mb-1" v-if="career.achievements.length > 0" />

        <v-card-item v-for="achievement in career.achievements" :key="achievement.description">
          <v-card-title>{{ achievement.title }}</v-card-title>
          <v-card-text>
            <v-card-subtitle>{{ achievement.from }} - {{ achievement.to }}</v-card-subtitle>
            <p v-if="achievement.description">{{ achievement.description }}</p>
            <p v-if="achievement.responsibility">担当 ：{{ achievement.responsibility }}</p>
            <p v-if="achievement.technologiesUsed">使用技術：{{ achievement.technologiesUsed }}</p>
            <p v-if="achievement.scopeOfWork">作業範囲：{{ achievement.scopeOfWork }}</p>
            <p v-if="achievement.teamSize">参画人数：{{ achievement.teamSize }}人</p>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<style scoped></style>
