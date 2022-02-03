<template>
  <div class="my-10 mx-auto max-w-7xl px-6">
    <h2>
      {{ largeCardSection.title }}
    </h2>
    <p class="mt-1">
      {{ largeCardSection.snippet }}
    </p>
    <div class="mt-8 grid grid-cols-12 gap-6">
      <LargeCardDisplay
        v-for="card in largeCardSection.cards"
        :key="card.id"
        :card-info="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { LargeCardSection } from '../../types'

export default {
  props: {
    largeCardSection: {
      type: Object as PropType<LargeCardSection>,
      required: true,
    },
  },
}
</script>

<style scoped></style>
