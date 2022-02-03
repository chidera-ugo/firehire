<template>
  <NuxtLink :to="`/products/${cardInfo.id}`" class="col-span-3">
    <img
      class="h-44 w-full rounded-lg object-cover"
      :src="require(`@/assets/images/${cardInfo.image}` || 'fe1.jpg')"
    />
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ISmallImage } from '~/types'

export default Vue.extend({
  props: {
    cardInfo: {
      type: Object as PropType<ISmallImage>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
