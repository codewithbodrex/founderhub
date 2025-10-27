<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'

/**
 * ===== CONFIG NAV =====
 * Edit daftar link utama di sini
 */
const navLinks = [
  { name: 'Home', href: '/', hasDropdown: false },
  { name: 'About Us', href: '#', hasDropdown: true },
  { name: 'Courses', href: '/dashboard', hasDropdown: true },
  { name: 'Program', href: '#', hasDropdown: true },
  { name: 'FAQ', href: '#', hasDropdown: false },
  { name: 'Blog', href: '#', hasDropdown: true },
]

/**
 * ===== STATE =====
 */
const page = usePage()
const user = computed(() => page.props.auth?.user || null)
const mobileMenuOpen = ref(false)
const profileMenuOpen = ref(false)
const profileMenuRef = ref(null)

/**
 * ===== DERIVED / HELPERS =====
 */
// avatar: pakai dari DB kalau ada; kalau tidak, UI Avatars
const avatarUrl = computed(() => {
  if (!user.value) return ''
  if (user.value.avatar) return user.value.avatar
  const name = encodeURIComponent(user.value.name || 'U')
  return `https://ui-avatars.com/api/?name=${name}&background=EBF1FF&color=1F2937`
})

// in case kamu share count di props inertia; kalau tidak ada ya nol
const notifCount = computed(() => page.props.unread_notifications_count ?? 0)
const likesCount = computed(() => page.props.likes_count ?? 0)

// helper aman untuk route ziggy (kalau belum diset, jatuh ke '#')
const r = (name, params = {}) => {
  try {
    // eslint-disable-next-line no-undef
    if (typeof route !== 'undefined') return route(name, params)
  } catch (_) {}
  return '#'
}

/**
 * ===== BEHAVIOR: close dropdown saat klik di luar / tekan ESC =====
 */
const onDocClick = (e) => {
  if (!profileMenuOpen.value) return
  const el = profileMenuRef.value
  if (el && !el.contains(e.target)) profileMenuOpen.value = false
}
const onEsc = (e) => {
  if (e.key === 'Escape') {
    profileMenuOpen.value = false
    mobileMenuOpen.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onEsc)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onEsc)
})
</script>

<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
      <!-- Brand -->
      <div class="flex lg:flex-1">
        <Link href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">FounderHub</span>
          <img class="h-8 w-auto" src="/images/LogoFounderHub.svg" alt="FounderHub Logo">
        </Link>
      </div>

      <!-- Mobile menu btn -->
      <div class="flex lg:hidden">
        <button
          @click="mobileMenuOpen = true"
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          aria-label="Open main menu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <!-- Desktop nav links -->
      <div class="hidden lg:flex lg:gap-x-10">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 flex items-center gap-x-1"
        >
          {{ link.name }}
          <svg v-if="link.hasDropdown" class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <!-- Right actions (desktop) -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-2">
        <!-- Belum login -->
        <template v-if="!user">
          <Link :href="r('register')"
                class="flex items-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 border border-gray-300">
            Create Account
          </Link>
          <Link :href="r('login')"
                class="flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
            Sign In
          </Link>
        </template>

        <!-- Sudah login -->
        <template v-else>
          <!-- Notif -->
          <Link :href="r('notifications.index')"
                class="relative inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100"
                aria-label="Notifications">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.26904 9.75C5.2678 8.86051 5.44262 7.97957 5.78343 7.15796C6.12424 6.33635 6.6243 5.59031 7.25477 4.96286C7.88525 4.33541 8.63368 3.83895 9.45693 3.5021C10.2802 3.16525 11.1619 2.99467 12.0514 3.00019C15.763 3.02778 18.7317 6.11282 18.7317 9.83474V10.5C18.7317 13.8577 19.4342 15.8062 20.0529 16.8711C20.1196 16.9849 20.1551 17.1142 20.1558 17.2461C20.1565 17.378 20.1224 17.5077 20.0569 17.6222C19.9915 17.7367 19.8971 17.8319 19.7831 17.8982C19.6691 17.9646 19.5397 17.9997 19.4078 18H4.59222C4.46034 17.9997 4.33087 17.9645 4.21689 17.8982C4.1029 17.8318 4.00844 17.7366 3.94301 17.6221C3.87759 17.5076 3.84352 17.3778 3.84425 17.2459C3.84498 17.1141 3.88048 16.9847 3.94716 16.8709C4.56622 15.806 5.26904 13.8575 5.26904 10.5L5.26904 9.75Z" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            <span v-if="notifCount > 0"
                  class="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center px-1">
              {{ notifCount }}
            </span>
          </Link>

          <!-- Likes -->
          <Link :href="r('likes.index')"
                class="relative inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100"
                aria-label="Likes">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20.25C12 20.25 2.625 15 2.625 8.625C2.62519 7.49825 3.01561 6.40634 3.72989 5.53492C4.44416 4.6635 5.4382 4.06635 6.54299 3.845C7.64778 3.62366 8.79514 3.79178 9.78999 4.32078C10.7848 4.84978 11.5658 5.707 12 6.74671L12 6.74672C12.4342 5.70701 13.2152 4.84978 14.21 4.32078C15.2049 3.79178 16.3522 3.62366 17.457 3.845C18.5618 4.06635 19.5558 4.66349 20.2701 5.53492C20.9844 6.40634 21.3748 7.49825 21.375 8.625C21.375 15 12 20.25 12 20.25Z" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            <span v-if="likesCount > 0"
                  class="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-pink-500 text-white text-[10px] flex items-center justify-center px-1">
              {{ likesCount }}
            </span>
          </Link>

          <!-- Profile chip + dropdown -->
          <div class="relative" ref="profileMenuRef">
            <button type="button"
                    @click="profileMenuOpen = !profileMenuOpen"
                    class="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100"
                    aria-haspopup="menu" :aria-expanded="profileMenuOpen">
              <img :src="avatarUrl" :alt="user.name" class="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200" />
              <span class="text-sm font-semibold text-gray-900 max-w-[12rem] truncate">{{ user.name }}</span>
              <svg class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
              </svg>
            </button>

            <div v-show="profileMenuOpen"
                 class="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 z-50">
              <div class="px-4 pb-2">
                <p class="text-xs text-gray-500">Signed in as</p>
                <p class="text-sm font-medium text-gray-900 truncate">{{ user.email }}</p>
              </div>
              <Link :href="r('profile.edit')" class="block px-4 py-2 text-sm hover:bg-gray-50">Profile</Link>
              <Link :href="r('dashboard')" class="block px-4 py-2 text-sm hover:bg-gray-50">Dashboard</Link>
              <hr class="my-2">
              <Link as="button" method="post" :href="r('logout')"
                    class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                Sign Out
              </Link>
            </div>
          </div>
        </template>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <Link href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">FounderHub</span>
            <img class="h-8 w-auto" src="/images/LogoFounderHub.svg" alt="FounderHub">
          </Link>
          <button @click="mobileMenuOpen = false" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" aria-label="Close menu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <!-- Links -->
            <div class="space-y-2 py-6">
              <a v-for="link in navLinks" :key="link.name" :href="link.href"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                {{ link.name }}
              </a>
            </div>

            <!-- Auth area -->
            <div class="py-6">
              <!-- Belum login -->
              <template v-if="!user">
                <Link :href="r('register')"
                      class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Create Account
                </Link>
                <Link :href="r('login')"
                      class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Sign In
                </Link>
              </template>

              <!-- Sudah login -->
              <template v-else>
                <div class="flex items-center gap-3 py-2 -mx-3 px-3">
                  <img :src="avatarUrl" :alt="user.name" class="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200">
                  <div class="min-w-0">
                    <p class="text-base font-semibold leading-6 text-gray-900 truncate">{{ user.name }}</p>
                    <p class="text-sm text-gray-500 truncate">{{ user.email }}</p>
                  </div>
                </div>

                <div class="mt-4 grid grid-cols-3 gap-2 -mx-3 px-3">
                  <Link :href="r('notifications.index')" class="flex items-center justify-center gap-2 rounded-lg border py-2 hover:bg-gray-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.26904 9.75C5.2678 8.86051 5.44262 7.97957 5.78343 7.15796C6.12424 6.33635 6.6243 5.59031 7.25477 4.96286C7.88525 4.33541 8.63368 3.83895 9.45693 3.5021C10.2802 3.16525 11.1619 2.99467 12.0514 3.00019C15.763 3.02778 18.7317 6.11282 18.7317 9.83474V10.5C18.7317 13.8577 19.4342 15.8062 20.0529 16.8711C20.1196 16.9849 20.1551 17.1142 20.1558 17.2461C20.1565 17.378 20.1224 17.5077 20.0569 17.6222C19.9915 17.7367 19.8971 17.8319 19.7831 17.8982C19.6691 17.9646 19.5397 17.9997 19.4078 18H4.59222C4.46034 17.9997 4.33087 17.9645 4.21689 17.8982C4.1029 17.8318 4.00844 17.7366 3.94301 17.6221C3.87759 17.5076 3.84352 17.3778 3.84425 17.2459C3.84498 17.1141 3.88048 16.9847 3.94716 16.8709C4.56622 15.806 5.26904 13.8575 5.26904 10.5L5.26904 9.75Z" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="text-sm font-medium">Notif</span>
                  </Link>
                  <Link :href="r('likes.index')" class="flex items-center justify-center gap-2 rounded-lg border py-2 hover:bg-gray-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20.25C12 20.25 2.625 15 2.625 8.625C2.62519 7.49825 3.01561 6.40634 3.72989 5.53492C4.44416 4.6635 5.4382 4.06635 6.54299 3.845C7.64778 3.62366 8.79514 3.79178 9.78999 4.32078C10.7848 4.84978 11.5658 5.707 12 6.74671L12 6.74672C12.4342 5.70701 13.2152 4.84978 14.21 4.32078C15.2049 3.79178 16.3522 3.62366 17.457 3.845C18.5618 4.06635 19.5558 4.66349 20.2701 5.53492C20.9844 6.40634 21.3748 7.49825 21.375 8.625C21.375 15 12 20.25 12 20.25Z" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="text-sm font-medium">Likes</span>
                  </Link>
                  <Link :href="r('profile.edit')" class="flex items-center justify-center gap-2 rounded-lg border py-2 hover:bg-gray-50">
                    <svg class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0"/>
                    </svg>
                    <span class="text-sm font-medium">Profile</span>
                  </Link>
                </div>

                <div class="mt-6 -mx-3 px-3">
                  <Link as="button" method="post" :href="r('logout')"
                        class="block w-full rounded-lg bg-gray-900 px-3 py-2.5 text-base font-semibold leading-7 text-white text-center hover:bg-gray-800">
                    Sign Out
                  </Link>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
