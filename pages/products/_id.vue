<template>
  <div class="my-16">
    <portal-target name="destination"></portal-target>

    <PageNotFound v-if="!product" />

    <div v-else class="container py-5">
      <div class="grid grid-cols-12 gap-8">
        <GenericModal v-if="showModal" @closeModal="toggleShowModal">
          <div>
            <vc-calendar :value="null" color="indigo" is-dark is-range />

            <button
              class="mt-6 rounded-full bg-red-500 py-3 px-6 font-semibold text-white"
              @click="
                () => {
                  addItem(Number($route.params.id))
                  toggleShowModal()
                }
              "
            >
              Order Extinguisher
            </button>
          </div>
        </GenericModal>

        <img
          :src="require(`@/assets/images/${product.image}`)"
          alt=""
          class="col-span-6 w-full rounded-lg"
        />
        <div class="col-span-6 rounded-lg bg-gray-100 p-5">
          <h2>{{ product.title }}</h2>
          <p class="mt-3">{{ product.snippet }}</p>

          <button
            class="mt-6 rounded-full bg-red-500 py-3 px-6 font-semibold text-white"
            @click="toggleShowModal"
          >
            Rent Extinguisher
          </button>
        </div>
      </div>
      <div class="mt-10">
        <div v-for="item in items" :key="item.title" class="included-container">
          <h6>{{ item.title }}</h6>
          <p>
            {{ item.description }}
          </p>
        </div>
      </div>
      <div class="mt-12">
        <p>
          {{ product.description }}
        </p>
      </div>
      <div class="py-5"></div>

      <ReviewsSection />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'ProductDetails',
  layout: 'with-navigator',
  data() {
    return {
      showModal: false,
      items: [
        {
          title: 'Clean & Tidy',
          description: 'Id consequat exercitation adipisicing irure.',
        },
        {
          title: 'Super Effective',
          description: 'Id consequat exercitation adipisicing irure.',
        },
        {
          title: 'Cancel Anytime',
          description: 'Id consequat exercitation adipisicing irure.',
        },
      ],
    }
  },
  computed: {
    product() {
      return this.$store.getters.getProductById(Number(this.$route.params.id))
    },
  },
  methods: {
    toggleShowModal() {
      this.showModal = !this.showModal
    },
    ...mapMutations(['addItem']),
  },
})
</script>

<style scoped></style>
