<script setup>
// Dummy data for the blog posts
// You can easily update this array with your actual blog content
const posts = [
    {
        imageUrl: '/images/blog-1.svg',
        date: '5 Sept 2025',
        title: 'Cara Menemukan Role Founder-mu: Hustler, Hacker, Hipster, atau Handler?',
        excerpt: 'Setiap founder punya peran unik. Kenali kekuatanmu dan temukan jalur belajar yang sesuai untuk bangun startup impianmu.',
        href: '#'
    },
    {
        imageUrl: '/images/blog-2.svg',
        date: '10 Sept 2025',
        title: '5 Langkah Validasi Ide Startup Sebelum Bikin Produk',
        excerpt: 'Banyak startup gagal karena membangun produk yang tidak dibutuhkan pasar. Pelajari metode validasi sederhana agar ide bisnismu lebih tepat sasaran.',
        href: '#'
    },
    {
        imageUrl: '/images/blog-3.svg',
        date: '15 Sept 2025',
        title: 'Teknologi untuk Startup: Tools Gratis yang Wajib Kamu Coba',
        excerpt: 'Dari manajemen tim, pemasaran, hingga desain—temukan berbagai tools gratis yang dapat membantu founder mempercepat pertumbuhan startup.',
        href: '#'
    },
];
</script>

<template>
    <section class="bg-white py-24">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Founder Insights: Blog, Berita, & Event
                    </h2>
                    <p class="mt-2 text-lg text-gray-600">
                        Dapatkan inspirasi, strategi, dan cerita terbaru seputar startup, bisnis, dan perjalanan founder muda Indonesia.
                    </p>
                </div>
                <div class="mt-4 sm:mt-0 flex-shrink-0">
                    <a href="#" class="text-sm font-semibold text-gray-900 hover:text-indigo-500">
                        Lihat Semua <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article v-for="post in posts" :key="post.title" class="flex flex-col items-start justify-between">
                    <div class="relative w-full">
                        <img :src="post.imageUrl" :alt="post.title" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div class="max-w-xl">
                        <div class="mt-8 flex items-center gap-x-4 text-xs">
                            <time :datetime="post.date" class="text-gray-500">{{ post.date }}</time>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a :href="post.href">
                                    <span class="absolute inset-0"></span>
                                    {{ post.title }}
                                </a>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.excerpt }}</p>
                        </div>
                        <div class="mt-6">
                             <a :href="post.href" class="text-sm font-semibold text-gray-900 hover:text-indigo-500">
                                Selengkapnya <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>