<template>
    <div id="mouse-stalker"></div>
</template>

<script setup>
onMounted(() => {
    const stalker = document.getElementById('mouse-stalker');
    window.addEventListener('mousemove', function (e) {
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
})
</script>
<style scoped>
#mouse-stalker {
    pointer-events: none;
    position: fixed;
    top: -20px;
    left: -20px;
    width: 40px;
    height: 40px;
    background: rgba(0, 165, 160, 0.5);
    border-radius: 50%;
    transform: translate(0, 0);
    transition: transform 0.2s;
    transition-timing-function: ease-out;
    z-index: 999;
}

/* opacity: 0;
    top: 118px;
    left: 1293px;
    height: 300px;
    width: 300px;
    filter: blur(100px); */
</style>