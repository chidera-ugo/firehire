<template>
  <div class="my-10 mx-auto max-w-7xl px-6">
    <div class="py-16">
      <h2>My Items</h2>

      <div class="py-2"></div>

      <MyItemCard v-for="item in myItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['myItems']),
  },
})
</script>

<style scoped></style>
