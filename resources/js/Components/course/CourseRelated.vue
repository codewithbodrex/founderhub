<script setup>
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
  items: { type: Array, default: () => [] },
  browseLink: { type: String, default: '#' },
})

const topFive = computed(() => (props.items || []).slice(0, 5))

const catColor = (c) => {
  const m = {
    BUSINESS : 'bg-orange-100  text-orange-700',
    PRODUCT  : 'bg-indigo-100  text-indigo-700',
    MARKETING: 'bg-emerald-100 text-emerald-700',
    FINANCE  : 'bg-rose-100    text-rose-700',
  }
  return m[c?.toUpperCase?.()] || 'bg-gray-100 text-gray-700'
}

/* -- FIX: safe formatter for rating -- */
const fmtRating = (r) => Number.isFinite(Number(r)) ? Number(r).toFixed(1) : '0.0'
</script>

<template>
  <section>
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-900">Related Courses</h2>
      <Link :href="browseLink" class="inline-flex items-center gap-1 text-sm font-semibold text-pink-600 hover:text-pink-700">
        View All <span aria-hidden="true">→</span>
      </Link>
    </div>

    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <article v-for="c in topFive" :key="c.id" class="rounded-xl bg-white ring-1 ring-gray-200">
        <div class="aspect-[16/9] rounded-t-xl overflow-hidden bg-gray-100">
          <img :src="c.thumbnail" :alt="c.title" class="h-full w-full object-cover" />
        </div>
        <div class="px-4 pt-3 pb-4">
          <div class="flex items-center justify-between text-[10px]">
            <span :class="['inline-flex items-center rounded px-2 py-0.5 font-semibold tracking-wide', catColor(c.category)]">
              {{ c.category }}
            </span>
            <span class="text-pink-600 font-semibold">{{ c.price ?? 'FREE' }}</span>
          </div>
          <h3 class="mt-2 text-sm font-semibold text-gray-900 line-clamp-2 min-h-[3.25rem]">{{ c.title }}</h3>
          <div class="mt-3 border-t border-gray-200 pt-3 flex items-center justify-between text-xs text-gray-500">
            <span class="inline-flex items-center gap-1">
              <svg class="h-3.5 w-3.5 text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"/></svg>
              <span class="text-gray-700">{{ fmtRating(c?.rating) }}</span>
            </span>
            <span>{{ c?.students ?? 0 }} students</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
