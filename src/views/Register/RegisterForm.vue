<template>
    <div class="usr">
      <div class="usr-body">
        <PzForm id="RegisterForm" class="register-form pz-form" service="User" action="register">
        </PzForm>
      </div>
      <div class="usr-media" style="background-image: url(https://fbfad05d.cdn.akinoncloud.com/static_omnishop/shopi-28/img/main_slide_login_2.jpg);">
      </div>
    </div>
  </template>
  
  <script lang="ts">1
  import { defineComponent } from 'vue';
  import PzForm from './PzForm.vue';  // PzForm bileşeni

  export default defineComponent({
    components: {
      PzForm
    },
  });
  </script>
  