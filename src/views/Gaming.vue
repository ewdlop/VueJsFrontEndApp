<template>
  <div>
    <!-- Page Header -->
    <section class="bg-mythic-gradient text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-fantasy font-bold mb-4">
            Gaming Accessories Hub
          </h1>
          <p class="text-xl opacity-90 max-w-2xl mx-auto">
            Professional accessories tailored for board games, card games, and tabletop RPGs
          </p>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="p-8">
              <div class="w-16 h-16 bg-mythic-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2m0 0V7"></path>
                </svg>
              </div>
              <h3 class="text-xl font-fantasy font-semibold mb-4">Gaming Mats</h3>
              <p class="text-gray-600 mb-6">Custom mats for board games and card games</p>
              <button class="btn-primary">Browse Products</button>
            </div>
          </div>

          <div class="card text-center">
            <div class="p-8">
              <div class="w-16 h-16 bg-fantasy-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-fantasy font-semibold mb-4">Collectibles</h3>
              <p class="text-gray-600 mb-6">Limited edition art collectibles and models</p>
              <button class="btn-primary">Browse Products</button>
            </div>
          </div>

          <div class="card text-center">
            <div class="p-8">
              <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4l2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-fantasy font-semibold mb-4">Home Decor</h3>
              <p class="text-gray-600 mb-6">Fantasy-themed home decoration items</p>
              <button class="btn-primary">Browse Products</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-fantasy font-bold text-gray-800 mb-4">
            Popular Gaming Accessories
          </h2>
          <p class="text-xl text-gray-600">
            Most loved accessories by players
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in featuredProducts" :key="product.id" class="card">
            <div class="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
              <div class="w-full h-64 flex items-center justify-center">
                <span class="text-white font-fantasy text-lg">{{ product.name }}</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-fantasy text-xl font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-gray-500 text-sm mb-4">{{ product.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-mythic-600">${{ product.price.toLocaleString() }}</span>
                <button class="btn-primary">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Gaming',
  setup() {
    const featuredProducts = ref([
      {
        id: 1,
        name: 'Dragon War Gaming Mat',
        description: 'Large-size gaming mat designed for card games',
        price: 29
      },
      {
        id: 2,
        name: 'Magic Crystal Figurine',
        description: 'Handcrafted limited edition collectible',
        price: 69
      },
      {
        id: 3,
        name: 'Fantasy Map Wall Art',
        description: 'Large decorative art perfect for gaming rooms',
        price: 89
      }
    ])

    return {
      featuredProducts
    }
  }
}
</script> 