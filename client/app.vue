<script>
import Header from "./components/Header.vue";

</script>
<template >
    <Header />
    <div class="flex justify-between items-center p-4 bg-primary">
    <h1 class="text-xl">Welcome to the NuxtBlog</h1>
    <NuxtLink to="/blog/create" class="btn btn-sm btn-outline bg-white">New Article</NuxtLink>
  </div>
    <main class="bg-gray-50 h-screen p-4">
        <NuxtPage />
    </main>
</template>
