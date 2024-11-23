<script setup lang="ts">
import type { Product } from '@/types/global';
import { onBeforeMount, reactive } from 'vue';
import ProductDialog from '@/components/ProductDialog.vue';
import productList from '@/assets/data/productList.json';
import { useProductImages } from '@/stores/productImages';

const productImages = useProductImages().imgUrls;

const state = reactive({
  isDialogOpen: false,
  productList: new Array<Product>(),
  selectedProduct: {} as Product,
  selectedProductImage: ''
});

const onShowProductDetails = (item: Product, index: number) => {
  state.selectedProduct = item;
  state.selectedProductImage = productImages[index];
  state.isDialogOpen = true;
};

const closeDialog = (isOpen: boolean) => {
  state.isDialogOpen = isOpen;
};

const fetchProductList = async () => {
  state.productList = productList;
};

onBeforeMount(() => fetchProductList());
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, i) of state.productList" :key="item.productId" cols="12" sm="1" md="6">
        <v-sheet color="grey-lighten-3">
          <v-container>
            <v-row>
              <v-col class="ma-8">
                <v-card elevation="0" @click="onShowProductDetails(item, i)">
                  <v-img :src="productImages[i]" height="230" aspect-ratio="16/9" cover> </v-img>
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
    :product="state.selectedProduct"
    :product-image="state.selectedProductImage"
    @close="closeDialog"
  />
</template>

<style scoped></style>
