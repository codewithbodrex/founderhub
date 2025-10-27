<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import Navbar from '@/Components/Navbar.vue';
import HeroSection from '@/Components/HeroSection.vue';
import FounderRoles from '@/Components/FounderRoles.vue';
import TopicCategories from '@/Components/TopicCategories.vue';
import FeatureCourses from '@/Components/FeatureCourses.vue';
import MentorCta from '@/Components/MentorCta.vue';
import BlogSection from '@/Components/BlogSection.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <GuestLayout>
        <Head title="FounderHub - Bangun Startup Impianmu" />
        <Navbar />

        <main class="mx-auto max-w-screen-xl px-6 lg:px-8">
            <HeroSection />
        </main>

        <section class="mx-auto max-w-6xl px-6 lg:px-8">
            <FounderRoles />
        </section>

        <TopicCategories />
        
        <FeatureCourses />
        
        <MentorCta />

        <BlogSection /> 
        
        <Footer /></GuestLayout>
</template>