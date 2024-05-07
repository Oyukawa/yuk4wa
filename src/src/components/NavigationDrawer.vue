<script setup lang="ts">
import { computed, reactive } from 'vue';
import {
  mdiHome,
  mdiAccount,
  mdiHammerWrench,
  mdiEmailOutline,
  mdiWhiteBalanceSunny,
  mdiWeatherNight
} from '@mdi/js';
import router from '@/router';
import { useTheme } from 'vuetify';

const theme = useTheme();

type Navigation = { label: string; name: string; icon: string };

const state = reactive({
  navigationDrawer: false
});

const setNavigationDrawer = () => {
  state.navigationDrawer = !state.navigationDrawer;
};

const routerPush = (name: string) => router.push({ path: name });

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const themeIcon = computed(() => {
  return theme.global.current.value.dark ? mdiWeatherNight : mdiWhiteBalanceSunny;
});

const navigation: Array<Navigation> = [
  {
    label: 'TOP',
    name: 'top',
    icon: mdiHome
  },
  {
    label: 'CAREER',
    name: 'career',
    icon: mdiAccount
  },
  {
    label: 'PRODUCT',
    name: 'product',
    icon: mdiHammerWrench
  },
  {
    label: 'CONTACT',
    name: 'contact',
    icon: mdiEmailOutline
  }
];
</script>

<template>
  <!-- header -->
  <v-app-bar app clipped-left :elevation="0" false>
    <v-app-bar-nav-icon
      class="mt-1"
      @click="setNavigationDrawer"
      v-if="$vuetify.display?.smAndDown"
    />

    <v-toolbar-title class="fontBold">bKiyoh</v-toolbar-title>
    <v-spacer />
    <v-btn @click="toggleTheme"><v-icon :icon="themeIcon" size="x-large" /></v-btn>
    <v-btn v-if="$vuetify.display?.mdAndUp" :prepend-icon="mdiHome" @click="routerPush('/')"
      >top</v-btn
    >
    <v-btn v-if="$vuetify.display?.mdAndUp" :prepend-icon="mdiAccount" @click="routerPush('career')"
      >career</v-btn
    >
    <v-btn
      v-if="$vuetify.display?.mdAndUp"
      :prepend-icon="mdiHammerWrench"
      @click="routerPush('product')"
      >product</v-btn
    >
    <v-btn
      v-if="$vuetify.display?.mdAndUp"
      :prepend-icon="mdiEmailOutline"
      @click="routerPush('contact')"
      >contact</v-btn
    >

    <v-menu left bottom>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <!-- navigationBar -->
  <v-navigation-drawer v-model="state.navigationDrawer" v-if="$vuetify.display?.smAndDown">
    <v-list>
      <v-list-item
        v-for="(item, i) in navigation"
        :key="i"
        :value="item"
        :to="item"
        active-color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped></style>
