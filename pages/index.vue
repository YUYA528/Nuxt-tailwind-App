<template>
  <div class="font-mono">
    <NuxtLink to="/skill">Skill</NuxtLink>
    <h1 class="text-3xl font-bold underline">
      {{ hello }}
    </h1>
    <!-- <div id="app"> -->
    <span id="typewriter"></span>
    <!-- </div> -->
    <h1>Posts一覧</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
// useHead({
// titleTemplate: (title) => {
//   return title ? `${title} - Nuxt 3 basic` : 'Nuxt 3 basic';
// },
//   title: 'Aboutページ',
//   meta: [
//     {
//       name: 'description',
//       content: 'Aboutページ',
//     },
//   ],
// });
const { data: hello } = await useFetch('/api/hello');
const {
  data: posts,
  error,
  pending,
} = await useLazyFetch('https://jsonplaceholder.typicode.com/users/');

onMounted(() => {
  const typewriter = (param) => {
    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");

    string.forEach((char, index) => {
      setTimeout(() => {
        el.textContent += char;
      }, speed * index);
    });
  };

  typewriter({
    el: "#typewriter",
    speed: 50,
    string: "No! Try not. Do. Or do not. There is no try. Don’t think… feel."
  });
})
</script>

<style scoped>
/* #app {
  width: 400px;
  margin: 40px auto;
  padding: 28px;
  line-height: 1.5;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 2px 2px 5px 0px rgba(200, 200, 200, 1);
  font-family: "Times New Roman";
} */

#typewriter::after {
  content: "|";
  animation-name: blink;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes blink {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>