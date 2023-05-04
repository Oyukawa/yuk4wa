<script setup lang="ts">
import { reactive } from 'vue';
import { mdiHome, mdiHeart, mdiMagnify } from '@mdi/js';

type Navigation = { label: string; name: string; icon: string };

const state = reactive({
  navigationDrawer: true
});

const setNavigationDrawer = () => {
  state.navigationDrawer = !state.navigationDrawer;
};

const navigations: Array<Navigation> = [
  {
    label: 'TOP',
    name: 'top',
    icon: mdiHome
  },
  {
    label: 'ABOUT',
    name: 'about',
    icon: mdiHome
  }
];
</script>

<template>
  <!-- header -->
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click="setNavigationDrawer()" />

    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon :icon="mdiHeart" />
    </v-btn>

    <v-btn icon>
      <v-icon :icon="mdiMagnify" />
    </v-btn>

    <v-menu left bottom>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <!-- navigationBar -->
  <v-navigation-drawer app clipped v-model="state.navigationDrawer">
    <v-list>
      <v-list-item
        v-for="(item, i) in navigations"
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
