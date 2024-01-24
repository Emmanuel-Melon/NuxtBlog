<script>
import { ref } from 'vue';

export default {
 props: ["id"],
 setup(props) {
    const id = ref(props.id);

    return {
      id,
    };
 }
};
</script>

<template>
    <h1>Article: {{ id }}</h1>
</template>