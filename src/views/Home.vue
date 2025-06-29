<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      <div class="relative max-w-7xl mx-auto section-padding">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-fantasy font-bold mb-6 leading-tight">
            Welcome to <span class="text-yellow-300">Mythic Canvas</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium fantasy art marketplace and community platform, bringing together independent artists' masterpieces for collectors and gaming enthusiasts
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/marketplace" class="btn-primary text-lg px-8 py-4">
              Explore Marketplace
            </router-link>
            <router-link to="/artists" class="btn-secondary bg-white/20 border-white/30 text-white hover:bg-white/30 text-lg px-8 py-4">
              Meet Artists
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-fantasy font-bold text-gray-800 mb-4">
            Why Choose Mythic Canvas?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide a complete fantasy art ecosystem, from creation to collection, from community to commerce
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-fantasy-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-fantasy font-semibold mb-4">Curated Artworks</h3>
            <p class="text-gray-600">
              Carefully selected high-quality fantasy art, each piece professionally evaluated for artistic value and collectibility
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-mythic-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-fantasy font-semibold mb-4">Vibrant Community</h3>
            <p class="text-gray-600">
              A bridge connecting artists and collectors, providing interactive platform for creative exchange, artwork discussion and professional advice
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-fantasy font-semibold mb-4">Quality Guarantee</h3>
            <p class="text-gray-600">
              Professional printing materials and craftsmanship, offering various sizes and framing options, ensuring every item meets collector-grade standards
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Artworks -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-fantasy font-bold text-gray-800 mb-4">
            Featured Artworks
          </h2>
          <p class="text-xl text-gray-600">
            Explore our most popular fantasy art pieces
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="artwork in featuredArtworks" :key="artwork.id" class="card">
            <div class="aspect-w-4 aspect-h-3 bg-gray-200">
              <div class="w-full h-64 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
                <span class="text-white font-fantasy text-lg">{{ artwork.title }}</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-fantasy text-xl font-semibold mb-2">{{ artwork.title }}</h3>
              <p class="text-gray-600 mb-2">by {{ artwork.artist }}</p>
              <p class="text-gray-500 text-sm mb-4">{{ artwork.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-fantasy-600">${{ artwork.price.toLocaleString() }}</span>
                <button class="btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/marketplace" class="btn-primary text-lg px-8 py-4">
            View All Artworks
          </router-link>
        </div>
      </div>
    </section>

    <!-- Gaming Accessories -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-fantasy font-bold text-gray-800 mb-6">
              Custom Gaming Accessories
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              Professional accessories tailored for board games, card games, and tabletop RPGs, making every game session an artistic feast
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <svg class="w-6 h-6 text-fantasy-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Custom Gaming Mats</span>
              </li>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-fantasy-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Limited Edition Collectibles</span>
              </li>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-fantasy-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Fantasy-themed Home Decor</span>
              </li>
            </ul>
            <router-link to="/gaming" class="btn-primary text-lg px-8 py-4">
              Explore Gaming Accessories
            </router-link>
          </div>
          <div class="relative">
            <div class="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
              <div class="w-full h-96 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span class="text-white font-fantasy text-2xl">Gaming Accessories Showcase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscription Service -->
    <section class="section-padding bg-fantasy-gradient text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-fantasy font-bold mb-6">
          Monthly Surprise Box
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Monthly curated exclusive artworks, limited release, providing unique collecting experience for subscribers
        </p>
        <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 class="font-fantasy text-2xl font-bold mb-2">2-3 Items</h3>
              <p class="opacity-90">Exclusive Artworks</p>
            </div>
            <div>
              <h3 class="font-fantasy text-2xl font-bold mb-2">Limited Edition</h3>
              <p class="opacity-90">Collector-grade Prints</p>
            </div>
            <div>
              <h3 class="font-fantasy text-2xl font-bold mb-2">Artist</h3>
              <p class="opacity-90">Interviews & Behind-the-scenes</p>
            </div>
          </div>
        </div>
        <button class="btn-secondary bg-white text-fantasy-600 hover:bg-gray-100 text-lg px-8 py-4">
          Subscribe Now $49.99/month
        </button>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-800 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-fantasy font-bold mb-6">
          Ready to Start Your Fantasy Collection Journey?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Join our community and explore the infinite possibilities of the art world
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/marketplace" class="btn-primary text-lg px-8 py-4">
            Start Shopping
          </router-link>
          <router-link to="/community" class="btn-secondary border-white text-white hover:bg-white hover:text-gray-800 text-lg px-8 py-4">
            Join Community
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const featuredArtworks = ref([
      {
        id: 1,
        title: 'Dragon Guardian',
        artist: 'Sarah Chen',
        description: 'Ancient dragons guarding mysterious crystal caves',
        price: 89
      },
      {
        id: 2,
        title: 'Enchanted Forest',
        artist: 'Michael Zhang',
        description: 'A dreamlike forest filled with magical creatures',
        price: 129
      },
      {
        id: 3,
        title: 'Starlight Knight',
        artist: 'Emma Wang',
        description: 'A mysterious knight riding under the starlit sky',
        price: 79
      },
      {
        id: 4,
        title: 'Phoenix Rebirth',
        artist: 'Lisa Park',
        description: 'A magnificent phoenix rising from the flames',
        price: 149
      },
      {
        id: 5,
        title: 'Deep Sea Leviathan',
        artist: 'David Kim',
        description: 'An ancient beast from the mysterious depths',
        price: 119
      },
      {
        id: 6,
        title: 'Elven Realm',
        artist: 'Amy Liu',
        description: 'The hidden elven kingdom in the clouds',
        price: 139
      }
    ])

    return {
      featuredArtworks
    }
  }
}
</script> 