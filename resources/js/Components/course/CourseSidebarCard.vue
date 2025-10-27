<!-- resources/js/Components/course/CourseSidebarCard.vue -->
<script setup>
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
  course: { type: Object, required: true }
})

// fallback sementara
const dummyId = 1
const idMap = {
  'becoming-entrepreneur': 1,
  'marketing-fundamentals': 2,
}

const effectiveId = computed(() =>
  props.course?.id ?? idMap[props.course?.slug] ?? dummyId
)

const startHref  = computed(() =>
  effectiveId.value ? `/courses/${effectiveId.value}/learn` : null
)

const detailHref = computed(() =>
  props.course?.slug ? `/courses/${props.course.slug}` : '#'
)
</script>

<template>
  <div class="space-y-3 rounded-xl border bg-white p-4">
    <!-- tombol mulai -->
    <Link v-if="startHref" :href="startHref" class="btn btn-primary w-full">
      Mulai Belajar
    </Link>
    <button v-else :href="startHref" class="btn btn-primary w-full opacity-50 cursor-not-allowed">
      Mulai Belajar
    </button>

    <!-- tombol detail -->
    <Link :href="detailHref" class="btn btn-ghost w-full">
      Lihat Detail
    </Link>
  </div>
</template>
