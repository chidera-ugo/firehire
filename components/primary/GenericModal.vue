<template>
  <portal to="destination">
    <div
      class="fixed inset-0 z-500 flex h-screen w-screen flex-col justify-center bg-black bg-opacity-80 align-middle"
      @click.self="$emit('closeModal')"
    >
      <div
        class="mx-auto flex max-w-md justify-center rounded-lg bg-white p-6 align-middle"
      >
        <slot></slot>
      </div>
    </div>
  </portal>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
