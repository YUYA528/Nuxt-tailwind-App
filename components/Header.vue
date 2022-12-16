<template>
    <header class="fixed top-0 left-0 right-0">
        <nav class="flex justify-center gap-10 p-10">
            <NuxtLink to="/" class="">
                <h1>Home</h1>
            </NuxtLink>
            <NuxtLink v-for="menu in menus" :key="menu.text" :to="menu.to">
                {{ menu.text }}
            </NuxtLink>
        </nav>
    </header>
</template>

<script setup lang="ts">
// const isOpen = ref(false)
const menus = ref([
    {
        text: 'skill',
        to: '/skill',
    },
    {
        text: 'starwars',
        to: '/starwars',
    },
    {
        text: '3',
        to: '/blog',
    },
    {
        text: '4',
        to: '/dashboard',
    },
])
</script>

<!-- <style scoped>
/* .navbar-default {
    --color-text-base: #484848;
    --color-text-active: #ffffff;
    --color-text-hover: #ffffff;
    --color-text-muted: #1d4ed8;
    --color-fill-hover: #1d4ed8;
    --color-fill-active: #1d4ed8;
} */
</style> -->