<template>
    <section class="js-empty-basket" style="max-width: 560px; margin-top: 5rem;">
      <div class="basket-vakkocard__notify" style="padding-left: 0;">
        <i class="pz-icon-information"></i>
        Vakko kart indirim oranlarını görmek için üye girişi yapmalısınız.
      </div>
  
      <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
        <div>Henüz sepetine eklediğin ürün bulunmuyor.</div>
        <a href="/" style="width: 300px;" class="btn btn-primary" type="button" title="start shopping">
          <span>ALIŞVERİŞE BAŞLA</span>
        </a>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    // ... (component logic) ...
  });
  </script>
  