<template>
  <div class="my-10 mx-auto max-w-7xl px-6">
    <h2>
      {{ smallCardSection.title }}
    </h2>
    <div class="mt-8 grid grid-cols-12 gap-6">
      <SmallCardDisplay
        v-for="card in smallCardSection.cards"
        :key="card.id"
        :card-info="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { SmallCardSection } from '../../types'

export default {
  props: {
    smallCardSection: {
      type: Object as PropType<SmallCardSection>,
      required: true,
    },
  },
}
</script>

<style scoped></style>
