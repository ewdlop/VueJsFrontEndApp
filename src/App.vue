<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <div class="w-10 h-10 bg-fantasy-gradient rounded-lg flex items-center justify-center">
                <span class="text-white font-fantasy font-bold text-lg">MC</span>
              </div>
              <span class="font-fantasy text-xl font-bold text-gray-800">Mythic Canvas</span>
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link 
                v-for="link in navigationLinks" 
                :key="link.name"
                :to="link.path" 
                class="text-gray-600 hover:text-fantasy-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                :class="{ 'text-fantasy-600 bg-fantasy-50': $route.path === link.path }"
              >
                {{ link.name }}
              </router-link>
            </div>
          </div>

          <!-- Cart and User -->
          <div class="hidden md:flex items-center space-x-4">
            <button class="text-gray-600 hover:text-fantasy-600 p-2">
              <ShoppingCartIcon class="h-6 w-6" />
            </button>
            <button class="btn-primary">
              Sign In
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-600 hover:text-fantasy-600 p-2">
              <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
              <XMarkIcon v-else class="h-6 w-6" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-show="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            <router-link 
              v-for="link in navigationLinks" 
              :key="link.name"
              :to="link.path" 
              @click="mobileMenuOpen = false"
              class="text-gray-600 hover:text-fantasy-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              :class="{ 'text-fantasy-600 bg-fantasy-50': $route.path === link.path }"
            >
              {{ link.name }}
            </router-link>
            <div class="flex items-center space-x-2 px-3 py-2">
              <button class="text-gray-600 hover:text-fantasy-600 p-2">
                <ShoppingCartIcon class="h-6 w-6" />
              </button>
              <button class="btn-primary flex-1">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto section-padding">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-fantasy-gradient rounded-lg flex items-center justify-center">
                <span class="text-white font-fantasy font-bold text-lg">MC</span>
              </div>
              <span class="font-fantasy text-xl font-bold">Mythic Canvas</span>
            </div>
            <p class="text-gray-300 mb-4">Premium fantasy art marketplace providing unique artworks and community experience for collectors, gamers, and art enthusiasts.</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348s-1.051 2.348-2.348 2.348zM12.017 7.956c-2.197 0-3.972 1.775-3.972 3.972s1.775 3.972 3.972 3.972s3.972-1.775 3.972-3.972s-1.775-3.972-3.972-3.972z" clip-rule="evenodd"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="font-fantasy text-lg font-semibold mb-4">Categories</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Fantasy Art</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Gaming Accessories</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Limited Edition</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Custom Products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-fantasy text-lg font-semibold mb-4">Support</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Return Policy</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-700 pt-8 mt-8">
          <p class="text-center text-gray-400">
            © {{ new Date().getFullYear() }} Mythic Canvas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'App',
  components: {
    ShoppingCartIcon,
    Bars3Icon,
    XMarkIcon
  },
  setup() {
    const mobileMenuOpen = ref(false)
    
    const navigationLinks = [
      { name: 'Home', path: '/' },
      { name: 'Marketplace', path: '/marketplace' },
      { name: 'Gaming', path: '/gaming' },
      { name: 'Community', path: '/community' },
      { name: 'Artists', path: '/artists' },
      { name: 'About', path: '/about' }
    ]

    return {
      mobileMenuOpen,
      navigationLinks
    }
  }
}
</script> 