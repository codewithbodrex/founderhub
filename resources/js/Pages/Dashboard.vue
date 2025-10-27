<!-- resources/js/Pages/Dashboard.vue -->
<script setup>
import { Head, usePage } from '@inertiajs/vue3'
import Navbar from '@/Components/Navbar.vue'

import HeroSectionAuthCards from '@/Components/HeroSectionAuthCards.vue'
import FounderRoles from '@/Components/FounderRoles.vue'
import TopicCategories from '@/Components/TopicCategories.vue'
import FeatureCourses from '@/Components/FeatureCourses.vue'
import MentorCta from '@/Components/MentorCta.vue'
import BlogSection from '@/Components/BlogSection.vue'
import Footer from '@/Components/Footer.vue'

const user = usePage().props.auth?.user
</script>

<template>
  <Head title="Dashboard | FounderHub" />

  <div class="min-h-screen bg-gray-50 text-gray-900">
    <Navbar />

    <!-- (opsional) header sapaan -->
    <!--
    <header class="bg-white shadow-sm">
      <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <h1 class="text-base sm:text-lg font-semibold text-gray-900">
          Welcome back<span v-if="user">, {{ user.name }}</span> 👋
        </h1>
      </div>
    </header>
    -->

    <!-- Wrapper konten: jangan kunci max-width di sini -->
    <main class="w-full py-10">
      <div class="space-y-12">
        <!-- Sama seperti welcome -->
        <section class="mx-auto max-w-screen-xl px-6 lg:px-8">
          <HeroSectionAuthCards />
        </section>

        <section class="mx-auto max-w-6xl px-6 lg:px-8">
          <FounderRoles />
        </section>

        <TopicCategories />
        <FeatureCourses />
        <MentorCta />
        <BlogSection />

        <Footer />
      </div>
    </main>
  </div>
</template>
