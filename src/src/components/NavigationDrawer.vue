<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { mdiHome, mdiAccount, mdiHammerWrench, mdiChevronRight, mdiTimelineOutline } from '@mdi/js';
import { useRouter, useRoute } from 'vue-router';

type Navigation = { label: string; name: string; icon: string };

const props = defineProps({
  contentWidth: {
    type: String,
    required: false
  }
});

const navigation: Array<Navigation> = [
  {
    label: 'Home',
    name: 'home',
    icon: mdiHome
  },
  {
    label: 'About',
    name: 'about',
    icon: mdiAccount
  },
  {
    label: 'Timeline',
    name: 'timeline',
    icon: mdiTimelineOutline
  },
  {
    label: 'Product',
    name: 'product',
    icon: mdiHammerWrench
  }
];

const router = useRouter();
const route = useRoute();

const selectedRouter = ref<Navigation>(
  navigation.find((item) => item.name === route.name) || navigation[0]
);

watch(
  () => route.name,
  (newRouteName) => {
    const matchedNavigation = navigation.find((item) => item.name === newRouteName);
    if (matchedNavigation) {
      selectedRouter.value = matchedNavigation;
    }
  },
  { immediate: true }
);

const routerPush = (item: Navigation) => {
  selectedRouter.value = item;
  router.push({ name: item.name });
};

const filterNavigation = computed(() => {
  return navigation.filter((item) => item.name !== selectedRouter.value.name);
});
</script>

<template>
  <v-app-bar app :elevation="0" color="rgba(18, 18, 18, 0.9)">
    <v-container
      :style="{
        maxWidth: props.contentWidth
      }"
    >
      <v-row>
        <v-col cols="auto" class="d-flex align-center">
          <v-toolbar-title class="fontBold">bKiyoh</v-toolbar-title>
        </v-col>
        <v-col cols="auto" class="d-flex align-center">
          /&#x3000;
          <v-speed-dial location="right center" transition="slide-x-transition">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                class="no-uppercase"
                v-bind="activatorProps"
                :prepend-icon="selectedRouter.icon"
                :append-icon="mdiChevronRight"
                flat
                >{{ selectedRouter.label }}
              </v-btn>
            </template>
            <template v-for="(n, i) in filterNavigation" :key="i">
              <v-btn
                class="no-uppercase"
                :icon="n.icon"
                v-tooltip:bottom="n.label"
                @click="routerPush(n)"
                variant="plain"
              ></v-btn>
            </template>
          </v-speed-dial>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.no-uppercase {
  text-transform: none;
}
</style>
