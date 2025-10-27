<script setup>
// Data for the 4 steps on the right
const steps = [
    { number: '1', text: 'Daftar sebagai mentor atau instruktur', bgColor: 'bg-indigo-100/60', textColor: 'text-indigo-800' },
    { number: '2', text: 'Lengkapi & sesuaikan profilmu', bgColor: 'bg-red-100/60', textColor: 'text-red-800' },
    { number: '3', text: 'Buat konten atau sesi pembelajaran', bgColor: 'bg-rose-100/60', textColor: 'text-rose-800' },
    { number: '4', text: 'Mulai menginspirasi founder muda', bgColor: 'bg-green-100/60', textColor: 'text-green-800' },
];
</script>

<template>
    <section class="bg-[#F5F7FA] py-24">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                <div class="relative bg-gradient-to-r from-[#FF395A] to-[#FFC25F] rounded-2xl px-8 md:px-12 py-8 overflow-hidden">
                    <div class="relative z-10 sm:w-4/5">
                        <h2 class="text-3xl font-bold text-white leading-tight">
                            Bangun Generasi Founder Muda Bersama
                        </h2>
                        <p class="mt-4 text-white/90">
                            Bagikan pengalaman, ilmu, dan insight-mu untuk menumbuhkan wirausaha muda Indonesia.
                        </p>
                        <div class="mt-8">
                            <a href="#" class="inline-block bg-white text-[#FF395A] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 hover:-translatey-1 transition-transform duration-300">
                                Daftar Jadi Mentor <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div class="absolute bottom-0 right-0 h-full w-1/2">
                         <img src="/images/mentor-woman.svg" alt="Become a Mentor" class="absolute bottom-0 right-0 h-[95%] w-auto object-contain">
                    </div>
                </div>

                <div class="bg-white rounded-2xl px-8 md:px-12 py-8">
                    <h3 class="text-2xl font-bold text-gray-900">
                        Langkah Menjadi Mentor
                    </h3>
                    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div v-for="step in steps" :key="step.number" class="flex items-start gap-4">
                            <div :class="['flex-shrink-0 w-10 h-10 flex items-center justify-center font-bold rounded-lg', step.bgColor, step.textColor]">
                                {{ step.number }}
                            </div>
                            <p class="text-gray-700">{{ step.text }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>