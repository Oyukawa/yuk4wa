<script setup lang="ts"></script>
<template>
  <v-timeline side="end" align="start">
    <v-timeline-item size="large" v-for="n in 5" :key="n">
      <template v-slot:icon>
        <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Tus eu perfecto</span>
      </template>
      <v-card>
        <v-card-item>
          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-subtitle>
            <span class="me-1">Local Favorite</span>

            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>

            <div class="text-grey ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
            seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <div class="px-4">
          <v-chip-group>
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </div>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<style scoped></style>
