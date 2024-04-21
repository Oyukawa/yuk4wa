import { defineStore } from 'pinia';
import product1 from '@/assets/images/products/product1.png';
import product2 from '@/assets/images/products/product2.png';
import product3 from '@/assets/images/products/product3.png';
import product4 from '@/assets/images/products/product4.png';
import product5 from '@/assets/images/products/product5.png';
import product6 from '@/assets/images/products/product6.png';
import product7 from '@/assets/images/products/product7.png';
import product8 from '@/assets/images/products/product8.png';
import product9 from '@/assets/images/products/product9.png';

export const useProductImages = defineStore('productImages', () => {
  const imgUrls = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9
  ];

  return {
    imgUrls
  };
});
