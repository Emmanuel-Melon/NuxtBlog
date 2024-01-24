<script>
import { ref } from 'vue';

export default {
 props: ["article"],
 setup(props) {
    const title = ref(props.article.title);
    const cover = ref(props.article.cover);
    const summary = ref(props.article.summary);

    return {
      title,
      cover,
      summary
    };
 }
};
// console.log(article);
</script>
<template>
    <div class="card card-compact w-96 bg-base-100 shadow-xl grow">
        <figure><img :src="cover" :alt="title" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ summary }}</p>
        </div>
    </div>
</template>