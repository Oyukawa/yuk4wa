<script setup lang="ts">
import type { Product } from '@/types/global';
import { onBeforeMount, reactive } from 'vue';
import ProductDialog from '@/components/ProductDialog.vue';

const state = reactive({
  isDialogOpen: false,
  productList: new Array<Product>(),
  selectProduct: {} as Product
});

const onShowProductDetails = (item: Product) => {
  state.selectProduct = item;
  state.isDialogOpen = true;
};

const closeDialog = (isOpen: boolean) => {
  state.isDialogOpen = isOpen;
};

const fetchProductList = async () => {
  const res = await fetch('/productList');
  state.productList = await res.json();
};

onBeforeMount(() => fetchProductList());
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="item in state.productList" :key="item.productId" cols="12" sm="6" md="4">
        <v-sheet color="grey-lighten-3">
          <v-container>
            <v-row>
              <v-col class="ma-8">
                <v-card elevation="0" @click="onShowProductDetails(item)">
                  <v-img :src="item.imgSrc" height="230" aspect-ratio="16/9" cover> </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <ProductDialog
    :is-opening="state.isDialogOpen"
    :product="state.selectProduct"
    @close="closeDialog"
  />
</template>

<style scoped></style>
