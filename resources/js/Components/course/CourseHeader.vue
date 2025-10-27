<script setup>
import { Link } from '@inertiajs/vue3'

const props = defineProps({
  course: { type: Object, required: true },
})

const catColor = (c) => {
  const m = {
    BUSINESS : 'bg-orange-100  text-orange-700',
    PRODUCT  : 'bg-indigo-100  text-indigo-700',
    MARKETING: 'bg-emerald-100 text-emerald-700',
    FINANCE  : 'bg-rose-100    text-rose-700',
  }
  return m[c?.toUpperCase?.()] || 'bg-gray-100 text-gray-700'
}
</script>

<template>
  <header class="bg-white border-b">
    <div class="mx-auto max-w-screen-xl px-6 lg:px-8 py-6">
      <nav class="text-sm text-gray-500 flex items-center gap-2">
        <Link href="#" class="hover:text-gray-900">Course</Link>
        <span>/</span>
        <span class="text-gray-900 font-medium">{{ course?.title }}</span>
      </nav>

      <div class="mt-3">
        <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">
          {{ course?.title }}
        </h1>
        <div class="mt-2 flex items-center gap-3 text-sm text-gray-600">
          <span :class="['inline-flex items-center rounded px-2 py-0.5 text-[10px] font-semibold', catColor(course?.category)]">
            {{ course?.category }}
          </span>
          <span class="inline-flex items-center gap-1">
            <svg class="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"/></svg>
            <span class="font-medium text-gray-800">{{ (course?.rating ?? 0).toFixed(1) }}</span>
            <span class="text-gray-400">• {{ course?.students ?? 0 }} students</span>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
