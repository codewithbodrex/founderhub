<script setup>
import { computed } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'

import NavbarAuth from '@/Components/Navbar.vue'       // pakai navbar login-mu
import FooterAuth from '@/Components/Footer.vue'       // pakai footer login-mu

import CourseHeader from '@/Components/course/CourseHeader.vue'
import CourseDetail from '@/Components/course/CourseDetail.vue'
import CourseSidebarCard from '@/Components/course/CourseSidebarCard.vue'
import CourseRelated from '@/Components/course/CourseRelated.vue'

/* ===== PROPS dari Inertia =====
  - course   : object data course yang sedang dibuka
  - related  : array course terkait
*/
const props = defineProps({
  course: { type: Object, required: true },
  related: { type: Array, default: () => [] },
})

/* ziggy-safe */
const hasRoute = (name) => {
  try { return typeof Ziggy !== 'undefined' && Ziggy.routes && Object.prototype.hasOwnProperty.call(Ziggy.routes, name) } catch { return false }
}
const r = (name, params = {}) => {
  try { if (hasRoute(name) && typeof route !== 'undefined') return route(name, params) } catch {}
  return '#'
}

const user = computed(() => usePage().props?.auth?.user ?? null)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <NavbarAuth />

    <!-- Header breadcrumbs + judul -->
    <CourseHeader :course="props.course" />

    <!-- CONTENT -->
    <div class="mx-auto max-w-screen-xl px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- LEFT: Detail -->
        <div class="lg:col-span-8">
          <CourseDetail :course="props.course" />
        </div>

        <!-- RIGHT: Sidebar -->
        <aside class="lg:col-span-4">
        <CourseSidebarCard
          :course="props.course"
          :start-link="`/courses/${props.course.id}/learn`"
          :detail-link="`/courses/${props.course.slug}`"
        />
        </aside>
      </div>

      <!-- RELATED -->
      <div class="mt-10 lg:mt-14">
        <CourseRelated
          :items="props.related"
          :browse-link="r('courses.index')"
        />
      </div>
    </div>

    <FooterAuth />
  </div>
</template>
