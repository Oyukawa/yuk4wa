<script setup lang="ts">
import icon from '@/assets/images/icons/IMG_icon.png';
import type { Career } from '@/types/global';
import { useCalculateDuration } from '@/stores/calculateDuration';
import { computed } from 'vue';
import dayjs from 'dayjs';

const props = defineProps<{
  careerList: Array<Career>;
}>();

const careerList = computed(() => {
  const formatList = props.careerList.map((x) => ({
    ...x,
    startDate: x.startDate,
    endDate: x.endDate === '現在' ? dayjs().format('YYYY/MM') : x.endDate
  }));
  return formatList.sort((a, b) => b.careerId - a.careerId);
});
</script>
<template>
  <v-timeline side="end" align="start" v-if="$vuetify.display?.mdAndUp">
    <v-timeline-item size="large" v-for="career in careerList" :key="career.careerId">
      <template v-slot:icon>
        <v-avatar :image="icon" />
      </template>
      <template v-slot:opposite v-if="career.startDate || career.endDate">
        <p>{{ career.startDate }} - {{ career.endDate }}</p>
        <p>
          {{ useCalculateDuration().dateRange(career.startDate, career.endDate) }}
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

        <v-divider class="mx-4 mb-1" v-if="career.achievements.length > 0"></v-divider>

        <v-card-item v-for="achievement in career.achievements" :key="achievement.description">
          <v-card-title>{{ achievement.title }}</v-card-title>
          <v-card-text>
            <v-card-subtitle>{{ achievement.from }} - {{ achievement.to }}</v-card-subtitle>
            <p v-if="achievement.description">{{ achievement.description }}</p>
            <p v-if="achievement.responsibility">担当:{{ achievement.responsibility }}</p>
            <p v-if="achievement.technologiesUsed">使用技術：{{ achievement.technologiesUsed }}</p>
            <p v-if="achievement.scopeOfWork">作業範囲：{{ achievement.scopeOfWork }}</p>
            <p v-if="achievement.teamSize">参画人数：{{ achievement.teamSize }}人</p>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-timeline-item>
  </v-timeline>

  <v-container v-if="$vuetify.display?.smAndDown">
    <v-row v-for="career in props.careerList" :key="career.careerId">
      <v-col>
        <v-card>
          <v-card-item>
            <v-card-title hide-details>{{ career.company }}</v-card-title>
            <v-card-subtitle v-if="career.startDate || career.endDate" class="me-1">
              <p>
                {{ career.startDate }} - {{ career.endDate }} ({{
                  useCalculateDuration().dateRange(career.startDate, career.endDate)
                }})
              </p>
            </v-card-subtitle>
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
              <p v-if="achievement.technologiesUsed">
                使用技術：{{ achievement.technologiesUsed }}
              </p>
              <p v-if="achievement.scopeOfWork">作業範囲：{{ achievement.scopeOfWork }}</p>
              <p v-if="achievement.teamSize">参画人数：{{ achievement.teamSize }}人</p>
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
