<template>
    <div class="bg-img text-white">
        <Header />
        <main class="h-full p-16">
            <slot />
        </main>
        <Footer />
        <MouseStalker />
    </div>
</template>

<script setup>
// definePageMeta({
//   pageTransition: false
// })
</script>

<style scoped>
/* .page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
} */
.bg-img {
    position: relative;
    background-image: url("https://source.unsplash.com/2000x1000/?city");
    backdrop-filter: opacity(20%);
    background-repeat: no-repeat;
    object-fit: cover;
    height: 100vh;
    width: 100vw;
}

.bg-img::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: brightness(75%);
    z-index: -1;
}
</style>