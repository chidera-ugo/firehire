<template>
  <div class="py-16">
    <LargeCardsSection
      v-for="section in largeCardSections.slice(0, 1)"
      :key="section.id"
      :large-card-section="section"
    />
    <SmallCardsSection
      v-for="section in smallCardSections"
      :key="section.id"
      :small-card-section="section"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { largeCardSections, smallCardSections } from '~/assets/data.js'

export default Vue.extend({
  name: 'ProductIndex',
  data() {
    return {
      largeCardSections,
      smallCardSections,
    }
  },
})
</script>

<style scoped></style>
