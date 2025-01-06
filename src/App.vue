<template>
  <div class="app">
    <TheHeader />
    <router-view />

  </div>
</template>

<script setup>
import TheHeader from '@/components/organisms/TheHeader.vue';
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  position: relative;
  &-animation {
    margin-bottom: 0;
  }
}

</style>
