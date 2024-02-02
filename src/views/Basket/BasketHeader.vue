<template>
    <section class="basket-header js-basket-header" v-if="!hidden">
      <div class="checkout2-header">
        <div class="checkout2-heading">
          <div class="checkout2-title">SEPET</div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      hidden: {
        type: Boolean,
        default: true,
      },
    },
  });
  </script>
  