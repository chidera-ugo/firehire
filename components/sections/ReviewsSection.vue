<template>
  <div>
    <h2>Customer Reviews</h2>
    <div class="py-3"></div>

    <div v-if="$fetchState.pending" class="py-24">
      <svg class="mx-auto h-8 w-8 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
    <div v-else-if="$fetchState.error" class="mx-auto py-24 text-center">
      <h3 class="capitalize text-red-500">an error occured</h3>
    </div>
    <div v-else>
      <ReviewCard
        v-for="review in reviews"
        :key="review.email"
        :review="review"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IReviewer } from '~/types'

export default Vue.extend({
  data() {
    const reviews: IReviewer[] = []
    return {
      reviews,
    }
  },
  async fetch() {
    const url = 'https://randomuser.me/api?results=5'
    const res = await this.$axios.get(url)
    this.reviews = res.data.results
  },
})
</script>

<style scoped></style>
