<template>
  <div class="my-3 flex align-middle">
    <img
      :src="require(`@/assets/images/${item.image}`)"
      class="mr-6 h-36 w-44 rounded-lg"
    />

    <div>
      <h3 class="font-bold">{{ item.title }}</h3>
      <div class="mt-0.5 line-clamp-4">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IProduct } from '~/types'

export default Vue.extend({
  props: {
    item: {
      type: Object as PropType<IProduct>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
