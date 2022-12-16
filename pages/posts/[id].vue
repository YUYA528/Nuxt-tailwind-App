<template>
    <p>ユーザID: {{ $route.params.id }}</p>
</template>

<script setup lang="ts">
const router = useRoute();
// useMeta({
//   title: 'Nuxt 3',
//   meta: [
//     {
//       name: 'description',
//       content: `User Id: ${router.params.id}`,
//     },
//   ],
// });

console.log(router.params.id);
</script>