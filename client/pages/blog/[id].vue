<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
import ArticleView from "../../components/ArticleView";

</script>
<template>
    <ArticleView :id="route.params.id" />
</template>