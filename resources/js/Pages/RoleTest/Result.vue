<script setup>
import { Link } from '@inertiajs/vue3'
import Navbar from '@/Components/Navbar.vue'
import Footer from '@/Components/Footer.vue'

const props = defineProps({
  name: String,
  gender: String,
  age_range: String,
  city: String,
  score: Object,
  percent: Object,
  dominant_role: String,
})

const rows = [
  ['Hustler','hustler'],
  ['Hacker','hacker'],
  ['Hipster','hipster'],
  ['Handler','handler'],
]
</script>

<template>
<div class="min-h-screen flex flex-col bg-[#fafbff] text-slate-800">
    <!-- HEADER dari komponen -->
    <Navbar />
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-1">Hasil Tes Peran</h1>
    <p class="text-gray-600 mb-4">Data tersimpan sementara di browser ini. Login/daftar untuk menyimpan ke profil.</p>

    <div class="bg-white shadow rounded p-4 mb-4">
      <h2 class="font-semibold mb-2">Ringkasan</h2>
      <ul class="text-sm text-gray-700 grid md:grid-cols-2 gap-x-6">
        <li><strong>Nama:</strong> {{ name }}</li>
        <li><strong>Gender:</strong> {{ gender?.charAt(0).toUpperCase()+gender?.slice(1) }}</li>
        <li><strong>Umur:</strong> {{ age_range }}</li>
        <li><strong>Kota:</strong> {{ city }}</li>
      </ul>
    </div>

    <div class="bg-white shadow rounded p-4 mb-6">
      <h2 class="font-semibold mb-3">Skor & Persentase</h2>
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left border-b"><th class="py-2">Role</th><th>Skor (maks 50)</th><th>%</th></tr>
        </thead>
        <tbody>
          <tr v-for="[label,key] in rows" :key="key" class="border-b last:border-0">
            <td class="py-2">{{ label }}</td>
            <td>{{ score?.[key] }}</td>
            <td>{{ percent?.[key] }}%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-indigo-50 border border-indigo-200 rounded p-4 mb-6">
      <p class="mb-1">Peran dominan kamu:</p>
      <p class="text-2xl font-extrabold">{{ dominant_role?.charAt(0).toUpperCase()+dominant_role?.slice(1) }}</p>
    </div>

    <div class="flex gap-3">
      <Link :href="route('login')" class="bg-indigo-600 text-white px-4 py-2 rounded">Login untuk simpan</Link>
      <Link :href="route('register')" class="bg-white border px-4 py-2 rounded">Daftar</Link>
    </div>
  </div>
<Footer />  
</div>  
</template>
