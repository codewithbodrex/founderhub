
<script setup>
// Data now includes the path to each SVG icon
const roles = [
    { name: 'Hustler', bgColor: 'bg-[#D8ECFF]', iconSrc: '/images/hustler-icon.svg' },
    { name: 'Hipster', bgColor: 'bg-[#EBEBFF]', iconSrc: '/images/hipster-icon.svg' },
    { name: 'Hacker', bgColor: 'bg-[#FFF0F0]', iconSrc: '/images/hacker-icon.svg' },
    { name: 'Handler', bgColor: 'bg-[#FFF2E5]', iconSrc: '/images/handler-icon.svg' },
];
import { Link } from '@inertiajs/vue3'

</script>

<template>
    <div class="relative py-12">
        <div class="lg:w-7/12 bg-gradient-to-br from-[#55AEFF] to-[#6F69F7] rounded-3xl lg:rounded-none px-8 py-10 sm:px-12 text-white z-0">
            <div class="lg:w-3/4">
                 <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">
                    Setiap Founder Punya Peran. <br> Which Founder Role Fits You Best?
                </h2>
                <p class="mt-4 text-lg text-indigo-100">
                    Cari tahu role-mu dan dapatkan jalur belajar yang sesuai.
                </p>
                <Link
                    :href="route('role-test.index')"
                    class="mt-8 inline-block bg-white text-red-500 font-semibold px-6 py-3 shadow-md hover:bg-gray-100 hover:-translate-y-1 transition-transform duration-300"
                >
                    Ikuti Tes FounderPath <span aria-hidden="true">→</span>
                </Link>
            </div>
        </div>

        <div class="mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:w-1/2 z-10">
            <div class="grid grid-cols-2 gap-6">
                
                <a v-for="role in roles" :key="role.name" href="#" :class="['block p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer', role.bgColor]">
                    <div class="flex items-center gap-4">
                        <div class="p-1">
                            <img :src="role.iconSrc" :alt="role.name + ' icon'" class="w-12 h-12">
                        </div>
                        <h3 class="font-semibold text-gray-800">{{ role.name }}</h3>
                    </div>
                </a>

            </div>
        </div>
    </div>
</template>