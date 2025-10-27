<!-- resources/js/Components/Footer.vue -->
<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

const footerLinks = {
  roles: [
    { name: 'Hustler', href: '#' },
    { name: 'Hipster', href: '#' },
    { name: 'Hacker', href: '#' },
    { name: 'Handler', href: '#' },
  ],
  quickLinks: [
    { name: 'About Us', href: '#' },
    { name: 'Program', href: '#' },
    { name: 'Insight & Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ]
}

const socials = [
  { name: 'Instagram', href: '#', iconSrc: '/images/instagram.svg', isSpecial: false },
  { name: 'LinkedIn',  href: '#', iconSrc: '/images/linkedin.svg',  isSpecial: true  },
  { name: 'Twitter',   href: '#', iconSrc: '/images/twitter.svg',   isSpecial: false },
  { name: 'YouTube',   href: '#', iconSrc: '/images/youtube.svg',   isSpecial: false },
]

/* ====== AUTH ====== */
const user = computed(() => usePage().props.auth?.user || null)
const showRegister = computed(() => !user.value)

/* ====== ZIGGY-SAFE ROUTE HELPER ====== */
const hasRoute = (name) => {
  try {
    // Ziggy global -> window.Ziggy
    return typeof Ziggy !== 'undefined'
      && Ziggy.routes
      && Object.prototype.hasOwnProperty.call(Ziggy.routes, name)
  } catch { return false }
}

const r = (name, params = {}) => {
  try {
    // route() global dari Ziggy hanya dipanggil jika rute ada
    if (hasRoute(name) && typeof route !== 'undefined') return route(name, params)
  } catch { /* noop */ }
  return '#' // fallback aman
}

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white mt-24">
    <div class="bg-cover bg-center" style="background-image: url('/images/footer-background.svg');">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <!-- Left -->
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bangun Perjalanan Founder-mu Bersama FounderHub
            </h2>
            <p class="mt-4 text-lg text-gray-600">
              Jelajahi jalur belajar personal yang dirancang untuk membantu kamu tumbuh sebagai wirausaha muda dan membangun startup impian.
            </p>

            <div class="mt-8 flex items-center gap-x-4">
              <!-- CTA Register: HANYA saat belum login -->
              <Link
                v-if="showRegister"
                :href="r('register')"
                class="rounded-md bg-[#18182E] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
                Register
              </Link>

              <!-- FounderPath: pakai helper r() agar aman jika rute belum ada -->
              <Link :href="route('role-test.index')" class="text-sm font-semibold text-gray-900 group">
                Ikuti Tes FounderPath
                <span class="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <!-- Right -->
          <div>
            <p class="text-gray-600 leading-relaxed mb-8">
              Kami percaya setiap founder punya peran unik: Hustler, Hacker, Hipster, Handler.
              FounderHub hadir untuk membantumu menemukan jalur belajar yang tepat.
            </p>

            <div class="bg-[#18182E] rounded-2xl text-white px-8 md:px-12 py-10">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                  <img src="/images/LogoFounderHubWhite.svg" alt="FounderHub Logo" class="h-8 mb-4">
                  <p class="text-gray-400 text-sm">
                    Platform Edukasi Bisnis All-In-One Berbasis Personalized Learning Path
                  </p>
                  <div class="mt-6 flex items-center gap-x-3">
                    <a
                      v-for="social in socials"
                      :key="social.name"
                      :href="social.href"
                      :class="[
                        'w-9 h-9 rounded-md flex items-center justify-center transition-colors',
                        social.isSpecial ? 'bg-orange-500 hover:bg-orange-600' : 'bg-white/10 hover:bg-white/20'
                      ]">
                      <span class="sr-only">{{ social.name }}</span>
                      <img :src="social.iconSrc" :alt="social.name + ' icon'" class="h-5 w-5">
                    </a>
                  </div>
                </div>

                <div>
                  <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">4 Role</h3>
                  <ul class="mt-4 space-y-3">
                    <li v-for="item in footerLinks.roles" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
                  <ul class="mt-4 space-y-3">
                    <li v-for="item in footerLinks.quickLinks" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="pb-6">
        <p class="text-center text-sm text-gray-500">
          &copy; {{ year }} - FounderHub. All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>
