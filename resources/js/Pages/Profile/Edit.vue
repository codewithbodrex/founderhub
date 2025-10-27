<script setup>
import Navbar from '@/Components/Navbar.vue'
import Footer from '@/Components/Footer.vue'
import { useForm, usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'

const props = defineProps({
  user: { type: Object, required: true },
  flash: { type: Object, default: () => ({}) }
})

const page = usePage()
const form = useForm({
  name: props.user.name ?? '',
  email: props.user.email ?? '',
  avatar: null,
})

const preview = ref(props.user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(props.user.name || 'U')}&background=EBF1FF&color=1F2937`)

function onFileChange(e) {
  const f = e.target.files?.[0]
  if (!f) return
  form.avatar = f
  preview.value = URL.createObjectURL(f)
}

const roleLabel = computed(() => props.user.role ? (props.user.role.charAt(0).toUpperCase()+props.user.role.slice(1)) : 'Belum ditentukan')
const roleClass = computed(() => {
  switch (props.user.role) {
    case 'hustler': return 'bg-violet-100 text-violet-800 border-violet-200'
    case 'hacker':  return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'hipster': return 'bg-emerald-100 text-emerald-800 border-emerald-200'
    case 'handler': return 'bg-amber-100 text-amber-800 border-amber-200'
    default:        return 'bg-gray-100 text-gray-700 border-gray-200'
  }
})

function submit() {
  // Kirim sebagai FormData + PATCH
  form.transform(data => ({ ...data, _method: 'patch' }))
      .post(route('profile.update'), {
        forceFormData: true,
        preserveScroll: true,
        onFinish: () => form.transform(data => data),
      })
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#fafbff]">
    <Navbar />

    <main class="flex-1">
      <div class="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <!-- Left: Avatar & Role -->
        <aside class="md:col-span-1">
          <div class="bg-white rounded-xl shadow p-6 text-center">
            <img :src="preview" alt="Avatar" class="h-32 w-32 rounded-full object-cover mx-auto ring-2 ring-white shadow" />
            <div class="mt-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full border text-sm font-semibold" :class="roleClass">
                {{ roleLabel }}
              </span>
            </div>

            <div class="mt-6">
              <label class="inline-flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border hover:bg-gray-50">
                <input type="file" class="sr-only" accept="image/*" @change="onFileChange" />
                <svg class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 118 0m-4-9l-3 3m3-3l3 3M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4z"/>
                </svg>
                <span>Ubah Avatar</span>
              </label>
              <p class="text-xs text-gray-500 mt-2">PNG/JPG maks 2MB.</p>
              <div v-if="form.errors.avatar" class="text-red-600 text-sm mt-2">{{ form.errors.avatar }}</div>
            </div>
          </div>
        </aside>

        <!-- Right: Form -->
        <section class="md:col-span-2">
          <div class="bg-white rounded-xl shadow p-6 space-y-6">
            <header class="flex items-center justify-between">
              <h1 class="text-xl font-semibold">Profil</h1>
              <div v-if="flash?.success" class="text-sm px-3 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                {{ flash.success }}
              </div>
            </header>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-1">Nama</label>
                <input v-model="form.name" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" />
                <div v-if="form.errors.name" class="text-red-600 text-sm">{{ form.errors.name }}</div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input type="email" v-model="form.email" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" />
                <div v-if="form.errors.email" class="text-red-600 text-sm">{{ form.errors.email }}</div>
              </div>
            </div>

            <div class="flex items-center justify-end gap-3">
              <button type="button" @click="submit"
                      :disabled="form.processing"
                      class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow disabled:opacity-50">
                {{ form.processing ? 'Menyimpan...' : 'Simpan Perubahan' }}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>
