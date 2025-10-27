<script setup>
import { ref, computed } from 'vue'
import { router } from '@inertiajs/vue3'
import Navbar from '@/Components/Navbar.vue'
import Footer from '@/Components/Footer.vue'

const props = defineProps({
  course: { type: Object, required: true },
})

const sections = props.course?.sections ?? []
const allLectures = sections.flatMap(s => s.lectures ?? [])
const currentLecture = ref(allLectures[0] || null)

function openLecture (lec) { currentLecture.value = lec }

function goBack () {
  if (window.history.length > 1) return window.history.back()
  // fallback kalau tidak ada history
  router.visit(`/courses/${props.course.id}/learn`)
}

const courseTitle = computed(() => props.course?.title || 'Course')
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#fafbff] text-slate-800">
    <Navbar />

    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-4 pt-6">
        <div class="mb-4 flex items-center justify-between text-sm text-slate-600">
          <span class="font-semibold">{{ courseTitle }}</span>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-12 gap-6">
        <!-- Sidebar -->
        <aside class="col-span-12 md:col-span-4 lg:col-span-3 bg-white rounded-xl shadow-sm border">
          <div class="p-4 border-b">
            <p class="text-xs uppercase text-slate-500">Contents</p>
          </div>
          <div>
            <div v-for="sec in sections" :key="sec.id" class="px-4 py-3">
              <p class="text-xs font-semibold text-slate-600 mb-2">{{ sec.title }}</p>
              <ul class="space-y-1">
                <li v-for="lec in sec.lectures" :key="lec.id"
                    @click="openLecture(lec)"
                    class="px-3 py-2 rounded cursor-pointer hover:bg-slate-50"
                    :class="{ 'bg-indigo-50 ring-1 ring-indigo-200': lec.id===currentLecture?.id }">
                  <span class="truncate">{{ lec.title }}</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <!-- Video + Title + Back button -->
        <section class="col-span-12 md:col-span-8 lg:col-span-9">
          <div class="bg-black rounded-xl overflow-hidden shadow">
            <div class="relative pt-[56.25%]">
              <video
                v-if="currentLecture"
                :src="`/lectures/${currentLecture.id}/stream`"
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                @contextmenu.prevent
                class="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <!-- Judul video -->
          <div class="mt-3">
            <h1 class="text-xl font-bold">{{ currentLecture?.title }}</h1>

            <!-- Back button ditempatkan DI BAWAH judul -->
            <button
              type="button"
              @click="goBack"
              class="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-slate-700 hover:bg-slate-50"
              aria-label="Go back"
              title="Back"
            >
              ← Back
            </button>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>
