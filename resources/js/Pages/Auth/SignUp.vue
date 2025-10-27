<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import Navbar from '@/Components/Navbar.vue'

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  agree: false,
})

const show1 = ref(false)
const show2 = ref(false)

const submit = () => {
  form.post('/register')
}
</script>

<template>
  <GuestLayout>
    <Head title="Create your account" />
    <Navbar />

    <main class="mx-auto max-w-5xl px-6 py-10">
      <!-- CARD: ring + rounded + overflow hidden -->
      <div class="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
        <!-- BG IMAGE: absolute, ikut radius, overscan supaya nutup padding transparan -->
        <div
          class="pointer-events-none absolute inset-0 rounded-[inherit]
                 bg-[url('/images/auth-bg.svg')] bg-no-repeat bg-center
                 bg-[length:150%_150%]"
        ></div>

        <!-- (Opsional) overlay tipis — kosongkan jika ingin warna gambar full -->
        <div class="pointer-events-none absolute inset-0 rounded-[inherit]"></div>

        <!-- KONTEN -->
        <div class="relative">
          <div class="mx-auto max-w-xl px-6 py-10 sm:px-10 sm:py-14">
            <h1 class="mb-8 text-center text-2xl font-semibold tracking-tight text-gray-900">
              Create your account
            </h1>

            <form @submit.prevent="submit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="mb-1 block text-sm text-gray-600">Full name</label>
                <input
                  v-model="form.name"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
                />
                <p v-if="form.errors.name" class="mt-1 text-xs text-rose-600">{{ form.errors.name }}</p>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="mb-1 block text-sm text-gray-600">Email</label>
                <input
                  v-model="form.email"
                  id="email"
                  type="email"
                  autocomplete="email"
                  placeholder="you@example.com"
                  class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
                />
                <p v-if="form.errors.email" class="mt-1 text-xs text-rose-600">{{ form.errors.email }}</p>
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                <!-- Password -->
                <div>
                  <label for="pass1" class="mb-1 block text-sm text-gray-600">Password</label>
                  <div class="relative">
                    <input
                      v-model="form.password"
                      :type="show1 ? 'text' : 'password'"
                      id="pass1"
                      autocomplete="new-password"
                      placeholder="••••••••"
                      class="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-gray-900 focus:outline-none"
                    />
                    <button type="button" @click="show1 = !show1" class="absolute inset-y-0 right-0 grid w-10 place-items-center text-gray-500">
                      {{ show1 ? '🙈' : '👁️‍🗨️' }}
                    </button>
                  </div>
                  <p v-if="form.errors.password" class="mt-1 text-xs text-rose-600">{{ form.errors.password }}</p>
                </div>

                <!-- Confirm password -->
                <div>
                  <label for="pass2" class="mb-1 block text-sm text-gray-600">Confirm password</label>
                  <div class="relative">
                    <input
                      v-model="form.password_confirmation"
                      :type="show2 ? 'text' : 'password'"
                      id="pass2"
                      autocomplete="new-password"
                      placeholder="••••••••"
                      class="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-gray-900 focus:outline-none"
                    />
                    <button type="button" @click="show2 = !show2" class="absolute inset-y-0 right-0 grid w-10 place-items-center text-gray-500">
                      {{ show2 ? '🙈' : '👁️‍🗨️' }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- Checkbox + Tombol satu baris -->
              <div class="flex items-center justify-between gap-4">
                <label class="inline-flex items-start gap-2 text-sm text-gray-700">
                  <input id="agree" type="checkbox" v-model="form.agree" class="mt-1 h-4 w-4 rounded border-gray-300" />
                  <span>I agree to the <a href="#" class="underline">Terms</a> and <a href="#" class="underline">Privacy</a>.</span>
                </label>

                <button
                  :disabled="form.processing || !form.agree"
                  type="submit"
                  class="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-60"
                >
                  <span>Create Account</span>
                  <span>→</span>
                </button>
              </div>

              <!-- OR + Google (divider rapi) -->
              <div class="relative my-8">
                <div class="absolute inset-0 flex items-center"><div class="h-px w-full bg-gray-200"></div></div>
                <div class="relative flex justify-center"><span class="rounded bg-white/70 px-3 text-xs text-gray-500">OR</span></div>
              </div>

              <div class="flex">
                <a
                  href="/auth/google/redirect"
                  class="mx-auto flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm hover:bg-gray-50"
                >
                  <img src="/images/google.svg" class="h-5 w-5" alt="Google" />
                  <span>Continue with Google</span>
                </a>
              </div>

              <p class="text-sm text-gray-600">
                Already have an account?
                <Link href="/login" class="font-medium text-gray-900 hover:underline">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  </GuestLayout>
</template>
