<script setup lang="ts">
import { reactive } from 'vue';
import ProductDialog from '@/components/ProductDialog.vue';

const cards = [
  { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
  { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
  { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 }
];

const state = reactive({
  isDialogOpen: false
});

const onClickImg = () => {
  state.isDialogOpen = true;
};

const closeDialog = (isOpen: boolean) => {
  state.isDialogOpen = isOpen;
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4">
        <v-sheet color="grey-lighten-3">
          <v-container>
            <v-row>
              <v-col class="ma-8">
                <v-card elevation="0" @click="onClickImg">
                  <v-img
                    :src="card.src"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                    aspect-ratio="16/9"
                    cover
                  >
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <ProductDialog :is-opening="state.isDialogOpen" @close="closeDialog" />
</template>

<style scoped></style>
