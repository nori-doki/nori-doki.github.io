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
  height: 100%;
  overflow: hidden;
  position: relative;
  &-animation {
    margin-bottom: 0;
  }
}

</style>
