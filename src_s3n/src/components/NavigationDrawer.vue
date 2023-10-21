<script setup lang="ts">
import { reactive } from 'vue';
import { mdiHome, mdiAccount, mdiHammerWrench, mdiEmailOutline } from '@mdi/js';
import router from '@/router';

type Navigation = { label: string; name: string; icon: string };

const state = reactive({
  navigationDrawer: false
});

const setNavigationDrawer = () => {
  state.navigationDrawer = !state.navigationDrawer;
};

const routerPush = (name: string) => router.push({ path: name });

const navigations: Array<Navigation> = [
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
      @click="setNavigationDrawer()"
      v-if="$vuetify.display?.smAndDown"
    />

    <v-toolbar-title class="fontBold">yuk4wa</v-toolbar-title>
    <v-spacer />
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
<style scoped></style>
