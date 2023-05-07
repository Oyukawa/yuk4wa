<script setup lang="ts">
import TopVideo from '@/components/TopVideo.vue';
import TopImg from '@/components/TopImg.vue';

const links = [
  {
    label: 'Top',
    name: ''
  },
  {
    label: 'About',
    name: 'about'
  },
  {
    label: 'Product',
    name: 'product'
  },
  {
    label: 'Contact',
    name: 'contact'
  }
];
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
      <v-col cols="auto">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn
              class="text-none fontBold"
              size="x-large"
              elevation="0"
              variant="plain"
              v-bind="props"
              ><span class="border-bottom-text"> I am a Frontend Developer </span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in links" :key="index">
              <router-link :to="item.name" class="text-link fontBold">
                <v-list-item-title>
                  {{ item.label }}
                </v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text-link {
  color: #000000;
  text-decoration: none;
}
.border-bottom-text {
  border-bottom: 4px solid #fbc02d;
}
</style>
