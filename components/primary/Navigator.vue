<template>
  <div
    class="fixed inset-0 top-14 z-40 h-14 w-screen bg-white bg-opacity-80 backdrop-blur-xl backdrop-filter"
  >
    <div class="mx-auto max-w-7xl px-6">
      <div class="my-4 -ml-2 flex align-middle">
        <NuxtLink to="/products" class="my-auto px-2">Products</NuxtLink>
        <div class="my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-auto h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div class="my-auto px-2">{{ $route.params.id }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageNavigator',
})
</script>

<style scoped></style>
