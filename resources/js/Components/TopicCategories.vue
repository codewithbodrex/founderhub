<script setup>
// Data for the 8 category cards
// You can easily change colors and icon paths here
const categories = [
    { name: 'Startup & Business Fundamentals', bgColor: 'bg-[#E1F7E3]', iconSrc: '/images/startup-icon.svg' },
    { name: 'Operation & Productivity', bgColor: 'bg-[#EBEBFF]', iconSrc: '/images/operation-icon.svg' },
    { name: 'Finance & Accounting', bgColor: 'bg-[#FFF2E5]', iconSrc: '/images/finance-icon.svg' },
    { name: 'IT & Software', courseCount: '22,649 Courses', bgColor: 'bg-[#FFF0F0', iconSrc: '/images/it-icon.svg' },
    { name: 'Digital Marketing & Growth', bgColor: 'bg-[#EBEBFF]', iconSrc: '/images/digital-icon.svg' },
    { name: 'Creative & Design', bgColor: 'bg-[#FFF2E5]', iconSrc: '/images/creative-icon.svg' },
    { name: 'Office Productivity', bgColor: 'bg-[#D8ECFF]', iconSrc: '/images/office-icon.svg' },
    { name: 'Personal Development', isSpecial: false, bgColor: 'bg-white', iconSrc: '/images/personal-icon.svg' },
];
</script>

<template>
    <section class="bg-gray-50/50 py-16 sm:py-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Top Topic Categories
                </h2>
            </div>

            <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <a 
                    v-for="category in categories" 
                    :key="category.name" 
                    href="#" 
                    :class="['block p-3 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1', category.bgColor]"
                >
                    <div class="flex items-center gap-4">
                        <div class="bg-white rounded-md">
                            <img :src="category.iconSrc" :alt="category.name + ' icon'" class="w-12 h-12">
                        </div>
                        <div>
                            <p class="font-semibold text-gray-800 text-sm leading-tight">{{ category.name }}</p>
                            <p v-if="category.courseCount" class="text-xs text-gray-500 mt-1">{{ category.courseCount }}</p>
                        </div>
                    </div>
                </a>
            </div>
            
            <div class="mt-10 text-center">
                <p class="text-sm text-gray-600">
                    We have more category & subcategory. 
                    <a href="#" class="font-semibold text-red-500 hover:text-red-600">
                        Browse All <span aria-hidden="true">→</span>
                    </a>
                </p>
            </div>
        </div>
    </section>
</template>