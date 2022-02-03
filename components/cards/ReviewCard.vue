<template>
  <div class="my-3 flex align-middle">
    <img :src="review.picture.thumbnail" class="mr-3 h-14 w-14 rounded-full" />
    <div>
      <h4 class="font-bold">{{ review.name.first }} {{ review.name.last }}</h4>
      <div class="mt-0.5">
        Eiusmod irure tempor velit laboris cupidatat ea aute aliquip pariatur
        voluptate incididunt.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IReviewer } from '~/types'

export default Vue.extend({
  props: {
    review: {
      type: Object as PropType<IReviewer>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
