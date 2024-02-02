<template>
    <div class="basket-wrapper">
      <div class="container-max-1580">
        <!-- ... (other HTML content) ... -->
        
        <EmptyBasket></EmptyBasket>

        <!-- <Checkout2></Checkout2>
        <BasketLoader></BasketLoader> -->
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
//   import Checkout2 from './Checkout2.vue';
 import EmptyBasket from './EmptyBasket.vue';
//   import BasketLoader from './BasketLoader.vue';
  
  export default defineComponent({
    components: {

      EmptyBasket,

    },
  });
  </script>
  