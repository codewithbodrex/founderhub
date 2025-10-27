<!-- resources/js/Components/course/CourseDetail.vue -->
<script setup>
const props = defineProps({
  course: { type: Object, required: true },
})

// what you'll learn – batasi 6 item
const learnItems = (props.course?.whatYouLearn ?? []).slice(0, 6)

// ===== Rating helpers =====
const overall = Number(props.course?.rating ?? 0)
const fmtRating = (r) => Number.isFinite(Number(r)) ? Number(r).toFixed(1) : '0.0'

// real breakdown dari server (kalau ada)
const realBreakdown = props.course?.rating_breakdown ?? { 5:0, 4:0, 3:0, 2:0, 1:0 }
const realTotal = Object.values(realBreakdown).reduce((a,b) => a + (Number(b)||0), 0)

// fallback dummy kalau belum ada review
const dummyBreakdownPct = { 5:60, 4:25, 3:10, 2:3, 1:2 }

// pilih sumber untuk bar: real kalau ada, kalau tidak pakai dummy %
const useDummy = realTotal === 0
const percent = (stars) => {
  if (useDummy) return dummyBreakdownPct[stars] || 0
  const n = Number(realBreakdown?.[stars] ?? 0)
  return Math.round((n / realTotal) * 100)
}

// bintang (full/empty)
const fullStars = Math.floor(overall)
const isFull = (idx) => idx <= fullStars
</script>

<template>
  <section class="rounded-2xl bg-white ring-1 ring-gray-200">
    <!-- Hero / Cover -->
    <div class="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-gray-100">
      <img :src="props.course?.hero ?? props.course?.thumbnail" class="h-full w-full object-cover" alt="">
    </div>

    <div class="p-6 sm:p-8">
      <!-- Description -->
      <div>
        <h3 class="text-base font-semibold text-gray-900">Description</h3>
        <p class="mt-2 text-gray-700 leading-7">
          {{ props.course?.description ?? 'Deskripsi kursus akan tampil di sini. Tulis overview manfaat, siapa pengajar, dan hasil belajar yang diharapkan.' }}
        </p>
      </div>

      <!-- What you will learn -->
      <div class="mt-6">
        <h3 class="text-base font-semibold text-gray-900">What you will learn in this course</h3>
        <div class="mt-3 rounded-xl ring-1 ring-gray-200 p-4 sm:p-5 grid sm:grid-cols-2 gap-2">
          <template v-if="learnItems.length">
            <div v-for="(w,i) in learnItems" :key="i" class="flex items-start gap-3 text-gray-800">
              <svg class="h-5 w-5 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span class="text-sm">{{ w }}</span>
            </div>
          </template>
          <p v-else class="text-sm text-gray-500">Belum ada poin pembelajaran.</p>
        </div>
      </div>

      <!-- Who is this course for -->
      <div class="mt-6">
        <h3 class="text-base font-semibold text-gray-900">Who this course is for</h3>
        <p class="mt-2 text-gray-700 text-sm leading-7">
          {{ props.course?.audience ?? 'Mahasiswa, pekerja, dan calon founder yang ingin mempelajari dasar-dasar kewirausahaan dan pengembangan produk.' }}
        </p>
      </div>

      <!-- Curriculum (simple) -->
      <div class="mt-6">
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold text-gray-900">Curriculum</h3>
          <div class="text-xs text-gray-500">
            {{ props.course?.lessons_count ?? 1 }} lessons • {{ props.course?.duration ?? '1h' }}
          </div>
        </div>

        <div class="mt-3 divide-y divide-gray-200 rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden">
          <details open class="group">
            <summary class="flex items-center justify-between px-4 py-3 cursor-pointer select-none">
              <span class="font-medium text-sm text-gray-900">Getting Started</span>
              <svg class="h-4 w-4 text-gray-500 group-open:rotate-180 transition" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/></svg>
            </summary>
            <ul class="text-sm">
              <li class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
                <div class="flex items-center gap-3">
                  <svg class="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <span>Welcome & Course Overview</span>
                </div>
                <span class="text-gray-500">06:20</span>
              </li>
              <li class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
                <div class="flex items-center gap-3">
                  <svg class="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <span>Entrepreneurial Mindset</span>
                </div>
                <span class="text-gray-500">11:45</span>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <!-- Course Rating -->
      <div class="mt-6">
        <h3 class="text-base font-semibold text-gray-900">Course Rating</h3>
        <div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Overall + stars -->
          <div class="rounded-xl ring-1 ring-gray-200 p-4 text-center">
            <div class="text-3xl font-bold text-gray-900">{{ fmtRating(overall) }}</div>
            <div class="mt-2 flex items-center justify-center gap-1">
              <template v-for="n in 5" :key="n">
                <svg v-if="isFull(n)" class="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"/>
                </svg>
                <svg v-else class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"/>
                </svg>
              </template>
            </div>
            <div class="mt-2 text-xs text-gray-500">{{ useDummy ? '0 reviews' : (realTotal + ' reviews') }}</div>
          </div>

          <!-- Breakdown bars -->
          <div class="sm:col-span-2 rounded-xl ring-1 ring-gray-200 p-4">
            <div v-for="i in [5,4,3,2,1]" :key="i" class="flex items-center gap-2 py-1.5">
              <span class="w-20 text-xs text-gray-600">{{ i }} Star Rating</span>
              <div class="h-2 rounded bg-gray-100 flex-1 overflow-hidden">
                <div class="h-full bg-yellow-400" :style="{ width: percent(i) + '%' }"></div>
              </div>
              <span class="w-10 text-xs text-gray-500">{{ percent(i) }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Feedback minimal -->
      <div class="mt-6">
        <h3 class="text-base font-semibold text-gray-900">Students Feedback</h3>
        <div class="mt-3 text-sm text-gray-500">Belum ada ulasan.</div>
      </div>
    </div>
  </section>
</template>
