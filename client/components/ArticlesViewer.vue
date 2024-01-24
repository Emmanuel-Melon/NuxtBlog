<script>
import { ref } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import ArticleOverview from "./ArticleOverview.vue";

export default {
    components: {
        ArticleOverview
    },
    setup() {
        const articles = ref([
            {
                id: 1,
                title: "Test Article",
                cover: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
                summary: "If a dog chews shoes whose shoes does he choose?"
            },
            {
                id: 2,
                title: "Using VueX",
                cover: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
                summary: "If a dog chews shoes whose shoes does he choose?"
            },
            {
                id: 3,
                title: "Custom AI",
                cover: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
                summary: "If a dog chews shoes whose shoes does he choose?"
            }
        ]);
        return {
            articles
        }
    }
};
</script>
<template>
    <section class="p-4">
        <div class="space-y-2">
            <div class="flex flex-wrap gap-4">
                <div v-for="article in articles" :key="article.id">
                    <ArticleOverview :article="article" />
                </div>
            </div>
        </div>
    </section>
</template>