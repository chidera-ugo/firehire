<template>
  <div>
    <HeroSection />
    <LargeCardsSection
      v-for="section in largeCardSections"
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
  name: 'IndexPage',
  data() {
    return {
      largeCardSections,
      smallCardSections,
    }
  },
})
</script>
