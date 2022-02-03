<template>
  <NuxtLink :to="`/products/${cardInfo.id}`" class="col-span-4">
    <img
      class="h-64 w-full rounded-lg object-cover"
      :src="require(`@/assets/images/${cardInfo.image}` || 'fe1.jpg')"
    />
    <h3 class="mt-4 line-clamp-1">
      {{ cardInfo.title }}
    </h3>

    <p class="mt-3 line-clamp-2">
      {{ cardInfo.snippet }}
    </p>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IExtinguisher } from '~/types'

export default Vue.extend({
  props: {
    cardInfo: {
      type: Object as PropType<IExtinguisher>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
