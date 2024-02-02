<script setup lang="ts">


import {  RouterView } from 'vue-router'


import HeaderC from './components/HeaderC.vue';
import FooterC from './components/FooterC.vue';

</script>

<template>

  <HeaderC msg="You did it!"/>

  <RouterView />

  <FooterC/>

</template>

<style scoped>

</style>
