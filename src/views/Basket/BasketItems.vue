<template>
    <section class="basket-items js-basket-list">
      <div class="basket-vakkocard__notify" style="padding-left: 0;">
        <i class="pz-icon-information"></i>
        Vakko kart indirim oranlarını görmek için üye girişi yapmalısınız.
      </div>
  
      <div class="cart">
        <div class="cart-rows js-basket-product-list"></div>
      </div>
  
      <template class="js-basket-product-template" hidden="">
        <!-- ... (other template content) ... -->
      </template>
  
      <div class="cart-footer">
        <a class="link-inline" href="/">ALIŞVERİŞE DEVAM ET</a>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    // ... (component logic) ...
  });
  </script>
  