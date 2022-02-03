<template>
  <div
    class="fixed inset-0 top-0 z-40 h-14 w-screen"
    :class="
      white
        ? 'bg-white'
        : 'bg-white bg-opacity-80 backdrop-blur-xl backdrop-filter'
    "
  >
    <div
      class="mx-auto flex h-full max-w-7xl justify-between px-6 align-middle"
    >
      <NuxtLink to="/" class="my-auto text-xl font-extrabold text-gray-800"
        >firehire</NuxtLink
      >
      <div class="my-auto flex align-middle">
        <NuxtLink
          v-for="item in navigationItems"
          :key="item"
          :to="`/${item.split(' ').join('-')}`"
          class="px-4 py-2 font-semibold capitalize"
          >{{ item }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    white: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    const navigationItems = ['products', 'my items']
    return {
      navigationItems,
    }
  },
}
</script>
