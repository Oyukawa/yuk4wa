<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { mdiHome, mdiAccount, mdiHammerWrench, mdiChevronRight, mdiTimelineOutline } from '@mdi/js';
import router from '@/router';

type Navigation = { label: string; name: string; icon: string };

const props = defineProps({
  contentWidth: {
    type: String,
    required: true
  }
});

const state = reactive({
  navigationDrawer: false
});

const selectedRouter = ref<Navigation>({
  label: 'Home',
  name: 'home',
  icon: mdiHome
});

const setNavigationDrawer = () => {
  state.navigationDrawer = !state.navigationDrawer;
};

const routerPush = (item: Navigation) => {
  selectedRouter.value = item;
  router.push({ name: item.name });
};

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
    name: 'career',
    icon: mdiTimelineOutline
  },
  {
    label: 'Product',
    name: 'product',
    icon: mdiHammerWrench
  }
];

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
          <v-app-bar-nav-icon
            class="mt-1"
            @click="setNavigationDrawer"
            v-if="$vuetify.display?.smAndDown"
          ></v-app-bar-nav-icon>
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
                >{{ selectedRouter.label }}</v-btn
              >
            </template>
            <template v-for="(n, i) in filterNavigation" :key="i">
              <v-btn
                class="no-uppercase"
                :icon="n.icon"
                v-tooltip:bottom="n.label"
                @click="routerPush(n)"
                flat
              ></v-btn>
            </template>
          </v-speed-dial>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="state.navigationDrawer" v-if="$vuetify.display?.smAndDown">
    <v-list>
      <v-list-item
        v-for="(item, i) in navigation"
        :key="i"
        :value="item"
        active-color="primary"
        @click="routerPush(item)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
.no-uppercase {
  text-transform: none;
}
</style>
