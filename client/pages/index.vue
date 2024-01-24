<script>
import ArticlesViewer from '../components/ArticlesViewer.vue';
import Header from "../components/Header.vue";
</script>
<template >
  <main class="bg-gray-50">
    <Header />
    <div class="flex justify-between items-center p-4 bg-primary">
      <h1 class="text-xl">Welcome to the NuxtBlog</h1>
      <button class="btn btn-outline bg-white">New Article</button>
    </div>
    <ArticlesViewer />
  </main>
</template>
