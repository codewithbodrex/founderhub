<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import Navbar from '@/Components/Navbar.vue'

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const showPassword = ref(false)
const submit = () => form.post('/login', { onFinish: () => form.reset('password') })
</script>

<template>
  <GuestLayout>
    <Head title="Sign in to your account" />
    <Navbar />

    <main class="mx-auto max-w-5xl px-6 py-10">
      <!-- CARD: ring (bukan border), rounded, overflow hidden -->
      <div class="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
        <!-- BG IMAGE: absolute + ikut radius, overscan supaya nutup padding transparan -->
        <div
          class="pointer-events-none absolute inset-0 rounded-[inherit]
                 bg-[url('/images/auth-bg.svg')] bg-no-repeat bg-center
                 bg-[length:130%_130%]"
        ></div>

        <!-- OVERLAY TIPIS: biar teks kebaca, tetap ikut radius -->
        <div class="pointer-events-none absolute inset-0 rounded-[inherit]"></div>

        <!-- KONTEN -->
        <div class="relative">
          <div class="mx-auto max-w-xl px-6 py-10 sm:px-10 sm:py-14">
            <h1 class="mb-8 text-center text-2xl font-semibold tracking-tight text-gray-900">
              Sign in to your account
            </h1>

            <form @submit.prevent="submit" class="space-y-6">
              <!-- Email -->
              <div>
                <label for="email" class="mb-1 block text-sm text-gray-600">Email</label>
                <input
                  v-model="form.email"
                  id="email"
                  type="email"
                  autocomplete="email"
                  placeholder="Username or email address"
                  class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
                />
                <p v-if="form.errors.email" class="mt-1 text-xs text-rose-600">{{ form.errors.email }}</p>
              </div>

              <!-- Password -->
              <div>
                <label for="password" class="mb-1 block text-sm text-gray-600">Password</label>
                <div class="relative">
                  <input
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    autocomplete="current-password"
                    placeholder="Password"
                    class="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-gray-900 focus:outline-none"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute inset-y-0 right-0 grid w-10 place-items-center text-gray-500"
                    aria-label="toggle password visibility"
                  >
                    <span v-if="!showPassword">👁️‍🗨️</span>
                    <span v-else>🙈</span>
                  </button>
                </div>
                <p v-if="form.errors.password" class="mt-1 text-xs text-rose-600">{{ form.errors.password }}</p>
              </div>

              <!-- Remember + Button satu baris -->
              <div class="flex items-center justify-between gap-4">
                <label class="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input id="remember" type="checkbox" v-model="form.remember" class="h-4 w-4 rounded border-gray-300" />
                  Remember me
                </label>

                <button
                  :disabled="form.processing"
                  type="submit"
                  class="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-60"
                >
                  <span>Sign In</span>
                  <span>→</span>
                </button>
              </div>

              <!-- Divider: jarak lega & label “angkat” -->
              <div class="relative my-8">
                <div class="absolute inset-0 flex items-center">
                  <div class="h-px w-full bg-gray-200"></div>
                </div>
                <div class="relative flex justify-center">
                  <span class="rounded bg-white/70 px-3 text-xs text-gray-500">SIGN IN WITH</span>
                </div>
              </div>

              <!-- Google -->
              <div class="flex justify-center">
                <a
                  href="/auth/google/redirect"
                  class="flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm hover:bg-gray-50"
                >
                  <img src="/images/google.svg" class="h-5 w-5" alt="Google" />
                  <span>Google</span>
                </a>
              </div>

              <p class="text-center text-sm text-gray-600">
                Don't have account?
                <Link href="/register" class="font-medium text-gray-900 hover:underline">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  </GuestLayout>
</template>
