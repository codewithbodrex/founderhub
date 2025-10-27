<script setup>
import { useForm } from '@inertiajs/vue3'
import { ref, computed, onMounted, watch } from 'vue'
import Navbar from '@/Components/Navbar.vue'
import Footer from '@/Components/Footer.vue'

const props = defineProps({
  // Bisa object keyed-by-role atau array flat
  questions: { type: [Object, Array], default: () => ({}) }
})

const QUESTIONS_PER_PAGE = 10
const step = ref(0) // 0 = identitas, >=1 = halaman pertanyaan

// --- Normalisasi + acak pertanyaan ---
const roleOrder = ['hustler','hacker','hipster','handler']

function normalizeToArray(q) {
  if (Array.isArray(q)) return q
  const arr = []
  for (const r of roleOrder) if (Array.isArray(q?.[r])) arr.push(...q[r])
  return arr
}
function shuffle(arr) {
  const a = arr.slice()
  for (let i=a.length-1;i>0;i--) {
    const j = Math.floor(Math.random()*(i+1))
    ;[a[i],a[j]] = [a[j],a[i]]
  }
  return a
}

const allQuestions = ref([])
function rebuild() {
  allQuestions.value = shuffle(
    normalizeToArray(props.questions).sort((a,b)=> (a.order??0)-(b.order??0))
  )
}
onMounted(rebuild)
watch(() => props.questions, rebuild, { deep:true })

// --- Paging ---
const pagesCount = computed(() => Math.ceil(allQuestions.value.length / QUESTIONS_PER_PAGE))
const currentStart = computed(() => (step.value-1) * QUESTIONS_PER_PAGE)
const currentQuestions = computed(() =>
  step.value === 0 ? [] : allQuestions.value.slice(currentStart.value, currentStart.value + QUESTIONS_PER_PAGE)
)

// --- Form ---
const form = useForm({
  name: '', gender: '', age_range: '', city: '',
  answers: [] // answers[globalIndex] = 1..5
})
function setAnswer(idx, val) { form.answers[idx] = val }

const totalQuestions = computed(() => allQuestions.value.length)
const answeredCount = computed(() => form.answers.filter(v => v != null).length)
const progress = computed(() => totalQuestions.value ? Math.round(answeredCount.value/totalQuestions.value*100) : 0)

// validasi step
const identityValid = computed(() =>
  form.name?.trim() && form.gender && form.age_range && form.city?.trim()
)
const pageAnswered = computed(() =>
  currentQuestions.value.every((_, qi) => form.answers[currentStart.value + qi] != null)
)

function nextStep() {
  if (step.value === 0) {
    if (!identityValid.value) return
    step.value = 1; scrollTop(); return
  }
  if (!pageAnswered.value) return
  if (step.value < pagesCount.value) { step.value++; scrollTop() }
  else { submit() }
}
function prevStep() { if (step.value>0){ step.value--; scrollTop() } }
function scrollTop(){ window.scrollTo({ top: 0, behavior: 'smooth' }) }
function submit(){ form.post(route('role-test.submit')) }

// --- UI helpers: skala 1..5 ala 16P (kiri=Setuju, kanan=Tidak setuju) ---
const sizes = { 5:'w-12 h-12', 4:'w-9 h-9', 3:'w-7 h-7', 2:'w-9 h-9', 1:'w-12 h-12' }
const scaleOrder = [5,4,3,2,1] // kiri→kanan
function circleClass(globalIdx, v){
  const selected = form.answers[globalIdx] === v
  const base = `rounded-full border-2 ${sizes[v]} flex items-center justify-center transition
                hover:scale-105 focus:outline-none`
  if (v >= 4) { // Setuju (hijau)
    return base + (selected ? ' border-emerald-600 bg-emerald-50' : ' border-emerald-300')
  } else if (v === 3) { // Netral
    return base + (selected ? ' border-gray-500 bg-gray-100' : ' border-gray-300')
  } else { // Tidak setuju (ungu)
    return base + (selected ? ' border-violet-600 bg-violet-50' : ' border-violet-300')
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#fafbff] text-slate-800">
    <!-- HEADER dari komponen -->
    <Navbar />

    <!-- CONTENT -->
    <main class="flex-1">
      <div class="max-w-4xl mx-auto px-4 py-10">
        <!-- Progress -->
        <div class="mb-6">
          <div class="flex items-center justify-between text-sm text-slate-600 mb-2">
            <span class="font-semibold">Tes Peran 4H</span>
            <span v-if="totalQuestions">{{ answeredCount }} / {{ totalQuestions }} terjawab · {{ progress }}%</span>
          </div>
          <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div class="h-full bg-indigo-600 rounded-full transition-all" :style="{ width: progress + '%' }"></div>
          </div>
        </div>

        <h1 class="text-3xl font-extrabold mb-2 text-center">Tes Peran 4H FounderHub</h1>
        <p class="text-gray-600 mb-8 text-center">
          Pilih tingkat persetujuan. Kiri = <span class="text-emerald-600 font-medium">Setuju</span>,
          kanan = <span class="text-violet-600 font-medium">Tidak setuju</span>, tengah = Netral.
        </p>

        <!-- Step 0: Identitas -->
        <section v-if="step === 0" class="bg-white shadow-lg rounded-xl p-6 space-y-6">
          <h2 class="text-xl font-semibold">Data Singkat</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium mb-1">Nama</label>
              <input v-model="form.name" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" required />
              <div v-if="form.errors.name" class="text-red-600 text-sm">{{ form.errors.name }}</div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Gender</label>
              <select v-model="form.gender" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" required>
                <option value="" disabled>Pilih...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div v-if="form.errors.gender" class="text-red-600 text-sm">{{ form.errors.gender }}</div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Umur</label>
              <select v-model="form.age_range" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" required>
                <option value="" disabled>Pilih...</option>
                <option value="16-20">16-20</option>
                <option value="21-25">21-25</option>
                <option value="26-30">26-30</option>
                <option value=">=31">&gt;=31</option>
              </select>
              <div v-if="form.errors.age_range" class="text-red-600 text-sm">{{ form.errors.age_range }}</div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Kota/Kabupaten</label>
              <input v-model="form.city" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" required />
              <div v-if="form.errors.city" class="text-red-600 text-sm">{{ form.errors.city }}</div>
            </div>
          </div>
        </section>

        <!-- Steps pertanyaan -->
        <section v-else class="bg-white shadow-lg rounded-xl p-6">
          <div v-if="currentQuestions.length">
            <div v-for="(q, qi) in currentQuestions" :key="q.id" class="py-6">
              <h3 class="text-lg font-semibold mb-4">{{ q.text }}</h3>
              <div class="flex items-center gap-5">
                <span class="text-emerald-600 text-sm font-medium mr-1">Setuju</span>
                <div class="flex items-center gap-4">
                  <label v-for="v in scaleOrder" :key="v" :class="circleClass(currentStart + qi, v)">
                    <input type="radio" class="sr-only"
                           :name="`answers[${currentStart + qi}]`"
                           :value="v"
                           @change="setAnswer(currentStart + qi, v)"
                           required />
                  </label>
                </div>
                <span class="text-violet-600 text-sm font-medium ml-1">Tidak setuju</span>
              </div>
              <div class="h-px bg-slate-100 mt-6" v-if="qi !== currentQuestions.length - 1"></div>
            </div>
          </div>
          <div v-else class="text-center text-gray-500 py-10">
            Belum ada pertanyaan. Jalankan <code>php artisan migrate:fresh --seed</code> dulu.
          </div>
        </section>

        <!-- Nav Wizard -->
        <div class="mt-8 flex items-center justify-between">
          <button v-if="step>0" type="button"
                  class="px-5 py-3 rounded-full border text-slate-700 hover:bg-slate-50"
                  @click="prevStep">
            Sebelumnya
          </button>

          <div class="flex-1"></div>

          <button v-if="step===0"
                  type="button"
                  :disabled="!identityValid"
                  class="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold disabled:opacity-50"
                  @click="nextStep">
            Mulai Pertanyaan →
          </button>

          <button v-else
                  type="button"
                  :disabled="!pageAnswered"
                  class="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold disabled:opacity-50"
                  @click="nextStep">
            {{ step < pagesCount ? 'Berikutnya →' : 'Kirim Hasil' }}
          </button>
        </div>

        <p v-if="step>0" class="mt-3 text-center text-sm text-slate-500">
          Halaman {{ step }} dari {{ pagesCount }}
        </p>
      </div>
    </main>

    <!-- FOOTER dari komponen -->
    <Footer />
  </div>
</template>
