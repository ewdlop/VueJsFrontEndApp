<template>
  <div>
    <!-- Page Header -->
    <section class="bg-fantasy-gradient text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-fantasy font-bold mb-4">
            Art Marketplace
          </h1>
          <p class="text-xl opacity-90 max-w-2xl mx-auto">
            Explore premium fantasy creations from independent artists worldwide
          </p>
        </div>
      </div>
    </section>

    <!-- Filters and Search -->
    <section class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <!-- Search Box -->
          <div class="flex-1 max-w-lg">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search artworks..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fantasy-500 focus:border-fantasy-500"
              />
              <svg class="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          <!-- Filters -->
          <div class="flex flex-wrap gap-4">
            <select v-model="selectedCategory" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fantasy-500">
              <option value="">All Categories</option>
              <option value="dragon">Dragons</option>
              <option value="fantasy">Fantasy Creatures</option>
              <option value="landscape">Landscapes</option>
              <option value="character">Characters</option>
              <option value="abstract">Abstract</option>
            </select>

            <select v-model="priceRange" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fantasy-500">
              <option value="">All Prices</option>
              <option value="low">Under $50</option>
              <option value="mid">$50 - $150</option>
              <option value="high">Above $150</option>
            </select>

            <select v-model="sortBy" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fantasy-500">
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Artwork Display -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto">
        <!-- Results Count -->
        <div class="mb-8">
          <p class="text-gray-600">
            Found {{ filteredArtworks.length }} artworks
          </p>
        </div>

        <!-- Artwork Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="artwork in filteredArtworks" :key="artwork.id" class="card group">
            <div class="relative overflow-hidden">
              <div class="aspect-w-4 aspect-h-3 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
                <div class="w-full h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span class="text-white font-fantasy text-lg">{{ artwork.title }}</span>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div class="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </button>
                <button class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
              </div>

              <!-- Artist Badge -->
              <div class="absolute bottom-4 left-4">
                <span class="px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                  {{ artwork.category }}
                </span>
              </div>
            </div>

            <div class="p-6">
              <h3 class="font-fantasy text-lg font-semibold mb-2 line-clamp-1">{{ artwork.title }}</h3>
              <p class="text-gray-600 mb-1">by {{ artwork.artist }}</p>
              <p class="text-gray-500 text-sm mb-4 line-clamp-2">{{ artwork.description }}</p>
              
              <div class="flex items-center justify-between mb-4">
                <span class="text-xl font-bold text-fantasy-600">${{ artwork.price.toLocaleString() }}</span>
                <div class="flex items-center text-sm text-gray-500">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  {{ artwork.rating }}
                </div>
              </div>

              <div class="flex gap-2">
                <button class="flex-1 btn-primary">
                  Add to Cart
                </button>
                <button class="btn-secondary px-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center mt-12" v-if="hasMoreItems">
          <button class="btn-secondary px-8 py-3">
            Load More Artworks
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Marketplace',
  setup() {
    const searchQuery = ref('')
    const selectedCategory = ref('')
    const priceRange = ref('')
    const sortBy = ref('newest')
    const hasMoreItems = ref(true)

    const artworks = ref([
      {
        id: 1,
        title: 'Dragon Guardian',
        artist: 'Sarah Chen',
        description: 'Ancient dragons guarding mysterious crystal caves, showcasing the magnificent fantasy world',
        price: 89,
        category: 'Dragons',
        rating: 4.8,
        tags: ['dragon', 'fantasy']
      },
      {
        id: 2,
        title: 'Enchanted Forest',
        artist: 'Michael Zhang',
        description: 'A dreamlike forest filled with magical creatures, surprises in every corner',
        price: 129,
        category: 'Landscapes',
        rating: 4.9,
        tags: ['landscape', 'fantasy']
      },
      {
        id: 3,
        title: 'Starlight Knight',
        artist: 'Emma Wang',
        description: 'A mysterious knight riding under the starlit sky, full of heroic spirit',
        price: 79,
        category: 'Characters',
        rating: 4.7,
        tags: ['character', 'fantasy']
      },
      {
        id: 4,
        title: 'Phoenix Rebirth',
        artist: 'Lisa Park',
        description: 'A magnificent phoenix rising from the flames, symbolizing hope and renewal',
        price: 149,
        category: 'Fantasy Creatures',
        rating: 4.9,
        tags: ['fantasy', 'phoenix']
      },
      {
        id: 5,
        title: 'Deep Sea Leviathan',
        artist: 'David Kim',
        description: 'An ancient beast from the mysterious depths, showcasing the power of nature',
        price: 119,
        category: 'Fantasy Creatures',
        rating: 4.6,
        tags: ['fantasy', 'sea']
      },
      {
        id: 6,
        title: 'Elven Realm',
        artist: 'Amy Liu',
        description: 'The hidden elven kingdom in the clouds, dreamlike beautiful scenery',
        price: 139,
        category: 'Landscapes',
        rating: 4.8,
        tags: ['landscape', 'fantasy']
      },
      {
        id: 7,
        title: 'Shadow Hunter',
        artist: 'James Wu',
        description: 'A mysterious hunter moving through darkness, with exceptional skills',
        price: 69,
        category: 'Characters',
        rating: 4.5,
        tags: ['character', 'dark']
      },
      {
        id: 8,
        title: 'Crystal Cavern',
        artist: 'Grace Lin',
        description: 'A glittering crystal cave filled with mysterious magical energy',
        price: 99,
        category: 'Landscapes',
        rating: 4.7,
        tags: ['landscape', 'crystal']
      }
    ])

    const filteredArtworks = computed(() => {
      let result = artworks.value

      // Search filter
      if (searchQuery.value) {
        result = result.filter(artwork => 
          artwork.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          artwork.artist.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          artwork.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      }

      // Category filter
      if (selectedCategory.value) {
        result = result.filter(artwork => 
          artwork.tags.includes(selectedCategory.value)
        )
      }

      // Price filter
      if (priceRange.value) {
        result = result.filter(artwork => {
          if (priceRange.value === 'low') return artwork.price < 50
          if (priceRange.value === 'mid') return artwork.price >= 50 && artwork.price <= 150
          if (priceRange.value === 'high') return artwork.price > 150
          return true
        })
      }

      // Sort
      if (sortBy.value === 'price-low') {
        result.sort((a, b) => a.price - b.price)
      } else if (sortBy.value === 'price-high') {
        result.sort((a, b) => b.price - a.price)
      } else if (sortBy.value === 'popular') {
        result.sort((a, b) => b.rating - a.rating)
      }

      return result
    })

    return {
      searchQuery,
      selectedCategory,
      priceRange,
      sortBy,
      hasMoreItems,
      filteredArtworks
    }
  }
}
</script> 